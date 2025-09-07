// ------------- HEADER SECTION -------------


/** # SendIntent #
 *
 * $$ app.SendIntent(packageName?, className?, action?, category?, uri?, type?, extras?, options='', callback?) $$
 * @param {str} [packageName]
 * @param {str} [className]
 * @param {str} [action] android.intent.action.*
 * @param {str} [category] android.intent.category.*
 * @param {str_uri} [uri]
 * @param {str_mim} [type]
 * @param {str||lst_obj} [extras] [{ name:str&comma; type:str-"string|float|int|long|bool|list|file|uri|keydown|keyup"&comma; value:str }]
 * @param {str_com} [options=''] Result:expect a result to be passed to the callback function,ClearTask
 * @param {fnc_json} [callback] {"pNames":["resultCode","data?"],"pTypes":["num_int--1|0|1","obj-{ action:str, type:str, data:str, flags:num_int, extras:obj }"]}
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Intens can be used to perform an operation between different applications or activities. _It is basically a passive data structure holding an abstract description of an action to be performed_.

**package name** and **class name** can specify the intent target, but you can also leave them null and define a **category** instead to let the user choose an application of that categoy.

If you expect a **callback** you have to pass the “result” **option**. The **result code** can be
	-1: _operation succeeded_
	1: _user-defined activity results_
	0: _operation canceled_

Many common usage examples are shown in @../intro/AppIntents.

For more information visit the [Android Developer Page](https://developer.android.com/reference/android/content/Intent.html). There you can find informations about the [activity](https://developer.android.com/reference/android/content/Intent.html#standard-activity-actions), [category](https://developer.android.com/reference/android/content/Intent.html#standard-categories) and [extra](https://developer.android.com/reference/android/content/Intent.html#standard-extra-data).

See Also: @GetIntent
 */
