# General

- Use the cfg object to enter specific app modes immediately (See @04CodingFeatures for more details)
- Use app.@../app/Script to load extra source files
- Use app.Add\* eqivalents to app.Create* to make your code shorter and cleaner
- Use features that DS provides you instead of doing them yourself (ie. filtering ListFolder items)
- Frequently check the debug log for any warnings or errors - especially before releasing your app (see @../app/CreateDebug)
- Use the web IDE for coding if you have a laptop becuase it is much easier than typing and debugging on a phone

## Performance

### UI
- Wrap your UI creation in app.Hide and app.Show
- <grey>Use obj.@../app/CreateLayout#Batch to do a whole bunch of configuration calls at one shot</grey>
- <grey>Use <js nobox>_Boost(true)</js> at the top of your main file</grey> to use a different backend bridge
- Add a (optionally animated) splash screen while your app loads UI
- Use <js nobox>app.@../app/SetDebugEnabled(false)</js> in your release version
- Reduce the use of app.\* calls (especially in loops) as it calls the backend bridge in most cases
    - Use lay.@../app/CreateLayout#SetChildMargins and lay.@../app/CreateLayout#SetChildTextSize to apply these properties to all children
    - When initializing list controls use a [precompiled item list](../app/CreateList.htm) instead of calling AddItem multiple times
    - Apply styling to buttons and text boxes using the “Html” option
    - Use the premium app.@../app/CreateTheme method for styling controls

### Graphics / Animations
- <grey>Use cfg.@04CodingFeatures#NoDom to disable DOM elements</grey>
- Use app.@../app/Animate instead of setInterval
- Use <js nobox>img.@../app/CreateImage#SetAutoUpdate(false)</js> and use manual img.@../app/CreateImage#Update calls
- Switch to the @../app/CreateGameView control (using cfg.@04CodingFeatures#Game) as its generally faster and works in web browsers too
- use the “async” option to load images