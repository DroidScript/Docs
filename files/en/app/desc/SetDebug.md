SetDebug lets you control the debugging level. The available modes are:
	“console”: allows console.log messages
	“ds”: allows app.Debug messages
	“adb”: allows adb debug messages (ie at apk startup)
	<js nobox>true</js>: enable all debug messages
	<js nobox>false</js> or “” : disable all debug messages

Note that debugging is disabled in apk release mode by default. Otherwise it is always enabled at start.

See Also: @Debug, @IsDebugging
