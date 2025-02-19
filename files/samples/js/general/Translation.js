/*
If you want to allow users to switch languages, you can use the 
app.SetAppLanguage() method and the T() function combined with a special JSON
file called 'lang.json' in your app that looks like this:-

{
    "langs": [ "English", "Deutsch", "Español" ],

    "codes": { "english":"en", "deutsch":"de", "español":"es" },

    "trans" :
    {
        "SelectLang" : {
            "en":"Please select your prefered language from the 'Settings' menu",
            "de":"Bitte wähle deine Sprache in dem Menü 'Einstellungen' aus",
            "es":"Selecciona tu idioma preferido en el menú 'Settings'"
        },

        "PrivacyPolicy" : {
            "en":"Privacy Policy",
            "de":"Datenschutzerklärung",
            "es":"Política de Privacidad"
        }
    }
}

Useful methods:-

T() -> Converts a keyword into the translated text (using lang.json).
app.GetLanguage()  -> Get the current language set for the whole device.
app.GetLanguageCode() -> Get the current language code set for the device.
app.SetAppLanguage() -> Set the current language for the App.
app.GetAppLanguages() -> Get list of languages from lang.json.
app.GetAppLangCode( name ) -> Get language code from lang name in lang.json.

Calling app.GetAppLangCode() with no params will return the currently set 
language code for the app.

Make sure you use the standard 2 letter language codes found here:-
  http://www.loc.gov/standards/iso639-2/php/code_list.php
*/

	
//Called when application is started.
function OnStart()
{
    //Set the current language.
    language = app.LoadText( "Language", "English" )
    app.SetAppLanguage( language )
   
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    //Add text.
    txt = app.AddText( lay, T("SelectLang"), 0.8, -1, "MultiLine" )
    txt.SetTextSize( 16 )
    txt.SetMargins( 0, 0, 0, 0.02 )
    
    //Add language spinner.
    spinLang = app.AddSpinner( lay, app.GetAppLanguages(), 0.4 )
    spinLang.SelectItem( language )
    spinLang.SetOnChange( spinLang_OnChange )
    
    //Add text.
    txt = app.AddText( lay, T("SupportPremium"), 0.8, 0.3, "MultiLine" )
    txt.SetMargins( 0, 0.1 )
    txt.SetTextSize( 22)
 
    //Add layout to app.
    app.AddLayout( lay )
}


//Handle language spinner.
function spinLang_OnChange()
{
    //Set chosen language.
    language = spinLang.GetText()
    app.SaveText( "Language", language )
    app.SetAppLanguage( language )
   
    //Re-create app with new language.
    //(alternatively you could ask the user to restart the app)
    app.DestroyLayout( lay )
    OnStart()
}


