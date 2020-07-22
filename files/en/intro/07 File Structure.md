## File Structure

<code>"/sdcard/DroidScript":"DroidScript root folder"/
├── \_nopremium\_:"Temporarily disable premium"
├── \_sdk\_:"Enable SDK menu for non premium users"
├── APKs:"Generated project apks"/
├── SPKs:"Saved project spks"/
├── Plugins:"Plugin installation folder"/
├── Extensions:"Extension installation folder for web IDE"/
└── "&lt;PROJECT\_NAME&gt;":"Project root folder"/
        ├── "&lt;PROJECT\_NAME&gt;.html":"Main entry for html projects (dominant)"
        ├── "&lt;PROJECT\_NAME&gt;.js":"Main entry for javascript projects (recessive)"
        ├── "build.json":"Controls certain aspects of the build process"
        ├── "~&lt;FILENAME&gt;":"Hidden file"
        ├── Html:"html files"/
        ├── Snd:"sound files"/
        └── Img:"image files"/
            ├── "&lt;PROJECT\_NAME&gt;.jpg":"Project icon (dominant)"
            └── "&lt;PROJECT\_NAME&gt;.png":"Project icon (recessive)"
</code>

### build.json

Using a build.json file

If you create a file called 'build.json' at the top level of your project, then you will be able to control certain aspects of the build process, such as the 'minSdkVersion' setting in the manifest, which sets the minimum version of Android that your app will run on.
<js>
{
	"manifest"&colon;
	{
		"minSdkVersion"&colon; 23,
		"targetSdkVersion"&colon; 28,
		"debuggable"&colon; false,
		"removePermissions"&colon; "WRITE\_EXTERNAL\_STORAGE",
		"homeScreen"&colon; false,
		"pathPattern"&colon; ".\*\\.png,.\*\\.jpg"
	},
    "autoPermissions"&colon; true
}
</js>
<grey>Note: This file is optional and not required for building APKs</grey>

If you release your app on Google Play, the '**minSdkVersion**' setting will control whether people with older phones can see your app in the store. If your app does not perform well on older versions of Android, then it is usually a good idea to make it unavailable for older phones or you will get lots of negative ratings and people will avoid your app. There may also be features such as Bluetooth 4.0 which are unavailable on older versions of Android.

DroidScript uses a simplified permissions model and scans your code looking for the required Android permissions, but you may want more fine-grain control of these permissions, so the '**removePermissions**' setting allows you to explicitly remove Android permissions from your APK.

See the [Android SDK](https://developer.android.com/reference/android/Manifest.permission.html) docs for for a full list of permissions.

The '**homeScreen**' setting is only used for creating home screen launchers apps, public kiosks and machine control type apps which totally take over the Android device, so don't use this option unless you know what you are doing!

If you want your app to handle certain types of file when the user tries to open them or use the '**Share via**' option, then the '**pathPattern**' setting allows you to specify which file types your app accepts. For example, if you were writing a text editor, then you would use the <b>*\\.txt</b> pattern.

See the '**Shared Data**' and '**Receive Intent**' samples in DroidScript for demos of how to handle file and text in your app.

The '**debuggable**' setting is intended for advanced users and allows your installed app to be debugged via the Android Debug Bridge. This setting defaults to false and should never be set to true in public releases of your app.

Typical build.json file:-
<js>
{
    "manifest"&colon;
    {
        "minSdkVersion"&colon; 23,
        "targetSdkVersion"&colon; 28,
    }
}
</js>
