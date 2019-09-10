SetDebug lets you control the debugging level. The availabe modes are:
console&colon; allows console.log messages
ds&colon; allows app.Debug messages
adb&colon; allows adb debug messages (ie at apk startup)
true&colon; enable all debug messages
false or “”: disable able all debug messages

Note that debugging is disabled in apk release mode by default. Otherwise it is always enabled at start.

See Also: @Debug, @IsDebugging