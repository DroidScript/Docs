// ------------- HEADER SECTION -------------

// TODO:
// DS V2.69b2p3 - Don't know where to put this method
// Added speech.SetLanguage() method. eg. speech.SetLanguage("Fr").

/** # TextToSpeech #
 * @brief Audiolize text
 *
 * $$ app.TextToSpeech(text, pitch?, rate?, callback?, stream?, locale?, engine?) $$
 * @param {str} text
 * @param {num} [pitch]
 * @param {num} [rate]
 * @param {fnc_json} [callback] {}
 * @param {str} [stream] music
 * @param {str} [locale]
 * @param {str} [engine]
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Uses the android TextToSpeech engine to play text acoustically. You can use different locales depending on the user language. A list of languages and their locales (LCID string) can be found on [www.science.co.il](https://www.science.co.il/language/Locale-codes.php).
 */



// ------------- SAMPLES -------------



/**
@sample Example
function OnStart()
{
	<b>app.TextToSpeech( "DroidScript is awesome!", 1.0, 1.0 );</b>
}
 */



/**
@sample Python Example
from native import app

def OnStart():
    <b>app.TextToSpeech("DroidScript is awesome!", 1.0, 1.0)</b>
 */
