DroidScript can't do everything imaginable. But you can help it to come closer to that by writing plugins.

There are basically two types of plugins: **JavaScript** plugins which will behave like an extra included JS source script and
**Java** plugins, which have a second compiled part written in java.

## JavaScript Plugins
A basic JS plugin consists of 2 parts:
- a **MyPlugin.inc** file containing the main JS source code
- a **MyPlugin.html** file containing the main page of your plugin documentation.
However you can add as many resources to it as you want.

There is a generator available which can create, debug and install plugins on the fly. you can even debug your plugin directly from that app.
Download it from the dspk store: [](https://dspk.justplayer.de/browse/view/67)


## Java Plugins
Writing java plugins is a bit tricky but once you get used to it you can get almost everything working.

### Structure
There are two types of Java plugin packages:
1. The standard zip file:
	- contains a MyPlugin.inc and a MyPlugin.html file as JS plugins
	- a MyPlugin.jar file which contains the compiled classes.dex file.
2. An APK file:
	- an assets/ folder containing the MyPlugin.inc and the MyPlugin.html file
	- a compiled classes.dex file

APK files are typically exported by AndroidStudio, AIDE and others.
That leads us to the ways how you can write and more importantly compile java plugins.

### Compile and Install
1. The android app 'AIDE'
	- [Download AIDE from PlayStore](https://play.google.com/store/apps/details?id=com.aide.ui)
	- Create a new AIDE project using the DroidScript SDK in the DS menu
	- Modify, Build, Install and Run the plugin app. A popup:"Plugin installed. Please restart DroidScript." will appear

2. AndroidStudio
	- There is a [UserPlugin template](https://github.com/DroidScript/Plugin-UserPlugin) available on [DroidScript's GitHub page](https://github.com/DroidScript)
	- Follow the instructions in [this BlogSpot guide](https://symbroson.blogspot.com/2018/02/ds-java-plugins-android-studio.html)

It may be possible with other IDE's as well (ie. IntelliJ even has a AndroidSDK Plugin), but this has not been tested before or just couldn't be made to work.

### Communicate with your Java code
In order to use the defined Java functions you have to call them from the JS part somehow.
For this purpose DroidScript provides a **\_CreatePlugin** component:

<js noinl>var plg = \_CreatePlugin( classpath:str, options:str\_com )</js>
<js noinl>plg.Destroy:"Calls Release()"()</js>
<js noinl>plg.GetType:"Returns the component class name"() → **string:** _“Plugin”_</js>
<js noinl>plg.Send:"Calls CallPlugin(Bundle)"( name:str, p1:"str||num||bin", p2:"str||num||bin", p3:"str||num||bin", p4:"str||num||bin", p5:"str||num||bin", p6:"str||num||bin", p7:"str||num||bin", p8:"str||num||bin" ) → **string**</js>
<js noinl>plg.SendObj:"Calls CallPlugin(Bundle, Object)"( name:str, obj:dso, p1:"str||num||bin", p2:"str||num||bin", p3:"str||num||bin", p4:"str||num||bin", p5:"str||num||bin", p6:"str||num||bin", p7:"str||num||bin", p8:"str||num||bin" ) → **string**</js>
<js noinl>plg.CreateObj:"Calls CreateObject(Bundle) with a String on “type”"( type:str, p1:"str||num||bin", p2:"str||num||bin", p3:"str||num||bin", p4:"str||num||bin", p5:"str||num||bin", p6:"str||num||bin", p7:"str||num||bin", p8:"str||num||bin" ) → **string:** _“#id”_</js>
<js noinl>plg.SendImg:"Calls CallPlugin(Bundle) with a byte[] on “img”"( name:str, img:dso-CreateImage, width:num\_pxl, height:num\_pxl ) → **string**</js>
<js noinl>plg.SendCam:"Calls CallPlugin(Bundle) with a byte[] on “cam”"( name:str, cam:dso-"../app/CreateCameraView" ) → **string**</js>

On the Java side following functions in <java nobox>public class MyPlugin { }</java> will get called by DroidScript:

<java noinl>public MyPlugin:"Called when a new plugin instance was created"()</java>
<java noinl>public void Init:"Called by DroidScript passing the app context/activity and the parent object"( Context ctx, Object parent )</java>
<java noinl>public void Release:"Called when java gets rid of your plugin"()</java>
<java noinl>public String CallPlugin:"Called by plg.Send and plg.SendImg"( Bundle b:"obj-{ cmd:str, p1:any, p2:any, p3:any, p4:any, p5:any, p6:any, p7:any, p8:any }" )</java>
<java noinl>public String CallPlugin:"Called by plg.SendObj"( Bundle b:"obj-{ cmd:str, p1:any, p2:any, p3:any, p4:any, p5:any, p6:any, p7:any, p8:any }", Object obj )</java>
<java noinl>public Object CreateObject:"Called by plg.CreateObj"( Bundle b:"obj-{ type:str, p1:any:any, p2:any, p3:any, p4:any, p5:any, p6:any, p7:any, p8:any }" )</java>
<!--java noinl>public void CallScript(Bundle b, String webViewId)</java-->
