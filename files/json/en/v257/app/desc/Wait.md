Performs a **synchronous** delay in your program which effectively pauses it. You can enable processing (input) events by setting doEvents to <js nobox>true</js>.

Its main use is for making brief pauses when communicating with external devices so that they get a chance to do work while your app executes.

Be careful when using this method without doevents in your code as Android quickly thinks that your app does not respond if used for over about 30 seconds.
