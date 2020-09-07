## File Structure

<code>"/sdcard/DroidScript":"DroidScript root folder"/
├── \_nopremium\_:"Temporarily disable premium"
├── APKs:"Generated project apks"/
│   └── user.keystore:"keystore used for signing apks"/
├── SPKs:"Saved project spks"/
├── Plugins:"Plugin installation folder"/
├── Extensions:"Extension installation folder for web IDE"/
└── "&lt;PROJECT\_NAME&gt;":"Project root folder"/
    ├── "&lt;PROJECT\_NAME&gt;.html":"Main entry for html projects (dominant)"
    ├── "&lt;PROJECT\_NAME&gt;.js":"Main entry for javascript projects (recessive)"
    ├── "build.json":"Controls certain aspects of the build process"
    ├── "lang.json":"For easy translating texts"
    ├── "~&lt;HIDDEN\_FILE&gt;":"Hidden file"
    ├── Html:"external html files (static, no app.* functions here please)"/
    ├── Snd:"sound files"/
    ├── Misc:"miscellaneous files"/
    └── Img:"image files"/
        └── "&lt;PROJECT\_NAME&gt;.png":"Project icon"
</code>

### lang.json

If you want to allow users to switch languages, you can use the
app.[SetAppLanguage](../app/SetLanguage.htm#Example) method and the T() function combined with a special JSON
file called 'lang.json' in your app that looks like this:-
<sample lang.json norun>
{
	"langs": [ "English", "Deutsch", "Español" ],

	"codes": { "english":"en", "deutsch":"de", "español":"es" },

	"trans" :
	{
		"SelectLang" : {
			"en":"Please select your prefered language from the 'Settings' menu",
			"de":"Bitte wähle deine Sprache in den 'Einstellungen' aus",
			"es":"Selecciona tu idioma preferido en el menú 'Settings'"
		},

		"PrivacyPolicy" : {
			"en":"Privacy Policy",
			"de":"Datenschutzerklärung",
			"es":"Política de Privacidad"
		}
	}
}
</sample lang.json>

Also make sure you use the [standard 2 letter language codes](http://www.loc.gov/standards/iso639-2/php/code\_list.php)

See also: [T()](04CodingFeatures.htm#Translations), @../app/GetLanguage, @../app/GetLanguageCode, @../app/GetAppLanguages, @../app/GetAppLangCode, @../app/SetAppLanguage

### user.keystore

This file is used for signing apks. It is **STRONGLY** recomended that you backup this file. You cannot update your app released using this key on Google Play or on any other device, unless you have the original file (and can also remember the password!)

### build.json

If you create a file called 'build.json' at the top level of your project, then you will be able to control certain aspects of the APK build process, such as the 'minSdkVersion' setting in the manifest, which sets the minimum version of Android that your app will run on.
<sample build.json>
{
	"manifest":
	{
		"minSdkVersion": 23,
		"targetSdkVersion": 28,
		"debuggable": false,
		"removePermissions": "WRITE\_EXTERNAL\_STORAGE",
		"homeScreen": false,
		"pathPattern": ".*\.png,.*\.jpg"
	},
	"autoPermissions": true
}
</sample build.json>
_Note: This file is optional and not required for building APKs_

If you release your app on Google Play, the '**minSdkVersion**' setting will control whether people with older phones can see your app in the store. If your app does not perform well on older versions of Android, then it is usually a good idea to make it unavailable for older phones or you will get lots of negative ratings and people will avoid your app. There may also be features such as Bluetooth 4.0 which are unavailable on older versions of Android.

DroidScript uses a simplified permissions model and scans your code looking for the required Android permissions, but you may want more fine-grain control of these permissions, so the '**removePermissions**' setting allows you to explicitly remove Android permissions from your APK.

See the [Android SDK](https://developer.android.com/reference/android/Manifest.permission.html) docs for for a full list of permissions.

The '**homeScreen**' setting is only used for creating home screen launchers apps, public kiosks and machine control type apps which totally take over the Android device, so don't use this option unless you know what you are doing!

If you want your app to handle certain types of file when the user tries to open them or use the '**Share via**' option, then the '**pathPattern**' setting allows you to specify which file types your app accepts. For example, if you were writing a text editor, then you would use the <b>\*\\.txt</b> pattern.

See the '**Shared Data**' and '**Receive Intent**' samples in DroidScript for demos of how to handle file and text in your app.

The '**debuggable**' setting is intended for advanced users and allows your installed app to be debugged via the Android Debug Bridge. This setting defaults to false and should never be set to true in public releases of your app.

<sample minimal build.json>
{
	"manifest":
	{
		"minSdkVersion": 23,
		"targetSdkVersion": 28
	}
}
</sample minimal build.json>
