### Scripting Framework
The **DroidScript** App contains a scripting framework which allows anyone with a bit of JavaScript knowledge to easily write Apps for their mobile phone or tablet. You can write very simple Apps with just a few buttons, or more complex ones which include dynamic graphical interfaces such as the DroidScript application itself, which is written using the very same framework.

As well as creating graphical interfaces, you have access to [Sensors](../app/CreateSensor.htm) like the Accelerometer, Compass, Light meter or other device components like [Wifi](../app\_Network.htm), [Bluetooth](../app\_Bluetooth.htm), [Camera](../app/CreateCameraView.htm), [GPS](../app/CreateLocator.htm), [SD Card](../app\_Files.htm), [SMS](../app/CreateSMS.htm), [Emails](../app/CreateEmail.htm), [Internet](../app\_Network.htm) and more. We're always adding new functionality to the framework, so if you want something added just let us know via [email](mailto:support\@droidscript.org) or leave a comment on the [forum](https://groups.google.com/forum/#!forum/androidscript).

### App Icons
When you first start DroidScript, you will see a series of icons used to run your JavaScript Apps. There will initially be a simple 'Hello World' example App here for you try. You can launch the App by simply touching the icon. After you have finished with an App, press the phone's 'back' button to return to the main screen. Long press an App's icon to see other available actions.

### Editing Scripts
You can edit Apps right here on your phone or tablet using the built-in script editor by long pressing on the App's icon and selecting the 'Edit' option.

You can also edit your Apps on a PC or Mac in a browser using the built in Wifi editor, by touching the small arrow button at the top and following the instructions shown. Editing with a full size keyboard is much easier and we recommend that you use the WiFi editing for long coding sessions, especially for larger projects. The Wifi editor also allows you to easily upload image and sound resources to your App.

### Samples
DroidScript comes with many sample Apps, ranging from very simple "Hello World" type Apps which show a single button to more complex ones which involve Web pages, Wifi and Phone-PC communication. It's a good idea to copy the script in one of these samples as a starting point for your own Apps. Try to find the one which best matches your requirements. Have a look at them [right now]{OpenSamples()}!

### Measurements
In order to maintain the scale of graphical objects in devices with different screen resolutions and orientations, all positioning and sizing values are given as a decimal **fraction** of the screen width or height. For example creating a button with a width of 0.5 would make the button half the screen width and using a height of 0.1 would make the button one tenth of screen height. You can however specify -1 or leave out the width and height parameters completely on many controls if you want the control to size according to its contents.

### Getting Started
At the top of the DroidScript screen on the right side is a "<<" button which opens a menu for samples (rocket icon), downloads (cart icon), and other features. Tap one of the sample categories. Look for samples that interest you.

Points of Interest:

- Code files tend to start with `OnStart()`.
- Objects are derived from the built-in `app` object, manipulated, then passed back to other functions on `app`.
- Screen output is structured in layouts, with controls in nested layouts.
  - Before starting to write your own Apps it's a good idea to read the documentation explaining '[Layouts](../app/CreateLayout.htm)' as these are a fundamental part of every DroidScript App.
- You can run samples right on their pages, and copy the code for placement into a new app.

Continue your introduction:

- Tap that top-right button again to see the main DroidScript app dashboard.  
- From the "..." menu, select New.  
- Enter a name like "First App" and click OK.  
- An icon for the new app is placed on the dashboard.  
- Tap that and it executes as a new open app.  
- Close that app (swipe it away).  
- On the DroidScript dashboard, press and hold the (First App) app.  
- Select Edit.
- You're now in the code.  
- Swipe back to get to the dashboard. The code is auto-saved.

From here you can go back to the documentation, look at more samples, and look at other "..." menu options.

Read about the available project types (Native, Node, HTML, Services, Python, Hybrid, etc.).

Join one of the forums (Google, Discord) and discuss DroidScript with others.

And consider a Premium license for many more features and extended Support.