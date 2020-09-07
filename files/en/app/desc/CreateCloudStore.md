The CloudStore component allows you to easily store and retrieve app data (as a simple or complex JSON object) from a cloud.
This is useful for game high scores, IOT sensor data storage etc. which should be shared across all user devices even if they're not in the same local network.

<premium>

CloudStore has the following limitations:-

	- once every 3 seconds max read/write
	- 300 read/writes per day per file
	- 3 files per user
	- 3k max file size.

To sign up for your free CloudStore key, please contact [support\@droidscript.org](mailto:support\@droidscript.org)
More files/space can be provided for a small fee

**Note:** CloudStore is still in beta, so don't rely on it to store any important data.

## Building APK

If you decide to share your CloudStore app with someone else it is perfectly possible to build an APK of the app.

However, please be aware that the apiKey is included in plain text unless you **obfuscate
your app**.
For extra security, you can split your key string into 2 or 3 parts (use obscurely
named global variables or functions) and put them in separate parts of your code, then
combine the parts only when making CloudStore API calls.
