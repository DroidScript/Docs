Intens can be used to perform an operation between different applications or activities. _It is basically a passive data structure holding an abstract description of an action to be performed_.

**package name** and **class name** can specify the intent target, but you can also leave them null and define a **category** instead to let the user choose an application of that categoy.

If you expect a **callback** you have to pass the “result” **option**. The **result code** can be
	-1: _operation succeeded_
	1: _user-defined activity results_
	0: _operation canceled_

You can find some common used examples for that in the [DroidScript Wiki](https://wiki.droidscript.me.uk/doku.php?id=intents:open_apps&s[]=sendintent)
For more information visit the [Android Developer Page](https://developer.android.com/reference/android/content/Intent.html). There you can find informations about the [activity](https://developer.android.com/reference/android/content/Intent.html#standard-activity-actions), [category](https://developer.android.com/reference/android/content/Intent.html#standard-categories) and [extra](https://developer.android.com/reference/android/content/Intent.html#standard-extra-data).

See Also: @GetIntent