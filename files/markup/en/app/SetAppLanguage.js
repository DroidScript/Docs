// ------------- HEADER SECTION -------------


/** # SetAppLanguage #
 * @brief Load the language code from lang.json
 * Loads the current language code from the lang.json file in your project root folder. Make sure you use the [standard 2 letter language codes](http://www.loc.gov/standards/iso639-2/php/code_list.php).
 *
 * See Also: @GetAppLanguages
 * $$ app.SetAppLanguage(name) $$
 * @param {str} name
*/




// ------------- SAMPLES -------------



/**
@sample Switch Language
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
    
    info();
}

function spinLang_OnChange()
{
    language = spinLang.GetText();
    app.SetAppLanguage( language );

    info();
}

function info() {
    app.ShowPopup(T( "SelectLang" ));
}
 */



/**
@sample Python Switch Language
from native import app

langJson = """
{
    "langs": [ "English", "Español" ],
    "codes": { "english":"en", "español":"es" },
    "trans" : {
        "SelectLang" : {
            "en":"Please select your preferred language from the 'Settings' menu",
            "es":"Selecciona tu idioma preferido en el menú 'Configuración'"
        }
    }
}
"""

def OnStart():
    global lay, spinLang
    app.WriteFile("lang.json", langJson)
    app.SetAppLanguage("English")

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    spinLang = app.CreateSpinner("English,Español", 0.4)
    spinLang.SetOnChange(spinLang_OnChange)
    lay.AddChild(spinLang)

    app.AddLayout(lay)

    info()


def spinLang_OnChange(item, index):
    language = spinLang.GetText()
    app.SetAppLanguage(language)

    info()

def info():
    app.ShowPopup(T("SelectLang"))

 */
