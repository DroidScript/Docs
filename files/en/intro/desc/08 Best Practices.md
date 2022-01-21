# General

- Use the cfg object to enter specific app modes immediately (See [Coding Features](04CodingFeatures.htm#The cfg object) for more details)
- Use app.@../app/Script to load extra source files
- Use app.Add\* eqivalents to app.Create* to make your code shorter and cleaner
- Use features that DS provides you instead of doing them yourself (ie. filtering ListFolder items)

## Performance

### UI
- Wrap your UI creation in app.Hide and app.Show
- <grey>Use obj.[Batch](../app/CreateLayout.htm) to do a whole bunch of configuration calls at one shot</grey>
- <grey>Use <js nobox>_Boost(true)</js> at the top of your main file</grey> to use a different backend bridge
- Add a (optionally animated) splash screen while your app loads UI
- Use <js nobox>app.@../app/SetDebugEnabled(false)</js> in your release version
- Reduce the use of app.\* calls (especially in loops) as it calls the backend bridge in most cases
    - When initializing list controls use [precompiled item list](../app/CreateList.htm) instead of calling AddItem multiple times
    - Apply styling to buttons and text boxes using the “Html” option
    - Use the premium @../app.CreateTheme method for styling controls

### Graphics / Animations
- <grey>Use cfg.[NoDom](04CodingFeatures.htm#NoDom) to disable DOM elements</grey>
- Use app.@../app/Animate instead of setInterval
- Use <js nobox>img.[SetAutoUpdate](../app/CreateImage.htm#SetAutoUpdate)(false)</js> and use manual img.[Update](../app/CreateImage.htm#Update) calls
- Switch to the @../app/CreateGameView control (using cfg.[Game](04CodingFeatures.htm#Game)) as its generally faster and works in web browsers too
- use the “async” option to load images