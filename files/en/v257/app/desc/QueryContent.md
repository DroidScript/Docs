Queries content from the android content model. The **uri** typically have the syntax “content://authority/path/id”. You can find more infos about it on the [Android Developer page](https://developer.android.com/reference/android/content/ContentUris).

The **coloumns** are specific for the database you are accessing. You can get this information from the respective content provider.

**select** is a optional sql command to filter the results.

**args** is an optional parameter for arguments you want to include to the sql command. The placeholder for these arguments are '?' signs in the sql command.

<premium>