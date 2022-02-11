## General

- Use the cfg object to enter specific app modes immediately (See @04CodingFeatures for more details)
- Use app.@../app/Script to load extra source files
- Use app.Add\* eqivalents to app.Create* to make your code shorter and cleaner
- Use features that DS provides you instead of doing them yourself (ie. filtering ListFolder items)
- Frequently check the debug log for any warnings or errors - especially before releasing your app (see @../app/CreateDebug)
- Use the web IDE for coding if you have a laptop because it is much easier than typing and debugging on a phone

## Performance

### UI
- Wrap your UI creation in app.Hide and app.Show
- Use cfg.@04CodingFeatures#Dark and cfg.@04CodingFeatures#Light for an easy Light/Dark theme setting
- <grey>Use obj.@../app/CreateLayout#Batch to do a whole bunch of configuration calls at one shot</grey>
- Add a (optionally animated) splash screen while your app loads UI
- Use <js nobox>app.@../app/SetDebug(false)</js> in your release version
- Reduce the use of app.\* calls (especially in loops) as it calls the backend bridge in most cases
    - Use lay.@../app/CreateLayout#SetChildMargins and lay.@../app/CreateLayout#SetChildTextSize to apply these properties to all children
    - When initializing list controls use a [precompiled item list](../app/CreateList.htm) instead of calling AddItem multiple times
    - Apply styling to buttons and text boxes using the “Html” option
    - Use the premium app.@../app/CreateTheme method for styling controls

### Graphics / Animations
- Use app.@../app/Animate instead of setInterval
- Use <js nobox>img.@../app/CreateImage#SetAutoUpdate(false)</js> and use manual img.@../app/CreateImage#Update calls
- Switch to the @../app/CreateGameView control (using cfg.@04CodingFeatures#Game) as its generally faster and works in web browsers too
- use the “async” option to load images

## Getting Help
- Check out this documentation and the [DS Wiki](https://droidscript.org/wiki/doku.php) for any hints
- Check if your issue has been resolved before by searching keywords on Google and on the @../Resources#Official_Forums
- For short questions check out the Chat extension in the mobile or WiFi IDE
- For more complex questions formalize your issue in the @../Resources#Official_Forums
  - Always be polite, respectful and never offend any person or group of people
  - Describe your issue in a way people can understand it without knowing anything about your individual project
  - Attach screenshots and demo SPKs to your question
  - Consider putting together a minimal demo showcasing your issue
