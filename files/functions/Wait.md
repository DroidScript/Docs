Performs a **synchronous** delay in your program which effectively pauses it.

Its main use is for making brief pauses when communicating with external devices so that they get a chance to do work while your app executes.

Be careful when using this method in your code as Android quickly thinks that your app does not respond if used for over about 30 seconds.
