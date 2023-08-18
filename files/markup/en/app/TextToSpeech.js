
/** # TextToSpeech #
 * @brief Audiolize text
 * 
 * $$ app.TextToSpeech(text, pitch, rate, callback, stream, locale, engine) $$ 
 * @param {str} text 
 * @param {num} pitch 
 * @param {num} rate 
 * @param {str} stream music
 * @param {str} locale 
 * @param {str} engine 
*/


// TextToSpeech.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Uses the android TextToSpeech engine to play text acoustically. You can use different locales depending on the user language. A list of languages and their locales (LCID string) can be found on [www.science.co.il](https://www.science.co.il/language/Locale-codes.php).

 */

// TextToSpeech.txt --> All the sample codes

/** @Sample
<sample Example>
function OnStart()
{
	<b>app.TextToSpeech( "DroidScript is awesome!", 1.0, 1.0 );</b>
}</sample>

 */

