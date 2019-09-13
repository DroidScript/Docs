SetDebug lets you control the debugging level. The availabe modes are:
console: allows console.log messages
ds: allows app.Debug messages
adb: allows adb debug messages (ie at apk startup)
true: enable all debug messages
false or “”: disable able all debug messages

Note that debugging is disabled in apk release mode by default. Otherwise it is always enabled at start.

See Also: @Debug, @IsDebugging
