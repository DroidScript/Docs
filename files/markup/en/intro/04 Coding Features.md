DroidScript provides some methods and flags in the sourcecode which are not available in regular JavaScript code but are interpreted internally by DroidScript.
You don't necessarily need to use these features but they are still pretty useful in some cases.

## The cfg object
The cfg object can be used to apply app options to your app before it is launched.
They should be placed at the very top of your main source script.

#### cfg.Portrait/Landscape
Defines the initial screen orientation your app will launch in

#### cfg.Holo cfg.Light cfg.Dark
These settings will change the look of all your controls. Holo was the default theme until DS 1.90 beta, where cfg.Light and cfg.Dark were added and cfg.Dark became the dark theme.
Note that only Light and Dark theme can be exchanged securely, Holo might cause broken UI in some cases when switching to Light or Dark.

#### cfg.Node
Runs the app in NodeJS mode.

#### cfg.MUI
Enables builtin material component support through the MUI object.
<premium>

#### cfg.Game
The `Game` configuration will let your app immediately run in [GameView](../app/CreateGameView.htm) mode. This way you can write your game code directly in the main script without bothering about creating the GameView container.

#### cfg.Transparent
This will let your app run transparently on the HomeScreen and it will stay on top of everything even if the user launches an other app.
<premium>

#### cfg.Serv
The `Serv` flag will serve any HTML or Hybrid app over a builtin HTTP server on port `3033`.

#### cfg.Console
This will show the console as main page instead of the GUI. Drawers will still work with this config.

<!--
#### cfg.NoSwapify
This option prevents function name swapping during obfuscation

#### cfg.Legacy
Enables various legacy transparent app behaviour
-->

#### cfg.Fast
The Fast config will make use of [the J2V8 engine](https://github.com/eclipsesource/j2v8) which increases the apps execution speed roughly by a factor of 3. Specifically it will increase the speed of app.* calls, which is quite useful for tween animations or when creating and modifying a huge amount of app controls.

The drawback of this method is that all default WebView DOM objects are not available any more.
This includes methods like setInterval and setTimeout which should be converted to **app.@../app/Animate** respectively.

**Note:** The same effect can be observed when running in a Node.js environment (using the `cfg.Node` flag)


## app.eventSource
In callback functions of controls you can use <js nobox>app.eventSource</js> to access the callee control object without having to assign the control to a specific variable. Previously this could be achieved by using the <js nobox>this</js> keyword. This allows you to create multiple controls with the same behaviour without having to redefine callback functions for different controls:
<sample Use Case of this>
function OnStart()
{
    lay = app.CreateLayout("Linear", "FillXY,VCenter");
    lay.SetChildMargins(0, 0.03);

    for(var i = 1; i <= 5; i++)
    {
        var btn = app.AddButton(lay, i, 0.6);
        btn.SetOnTouch(btnN_OnTouch);
    }
    app.AddLayout(lay);
}

function btnN_OnTouch()
{
	// app.eventSource == this
    app.ShowPopup("Hello " + app.eventSource.GetText());
}
</sample>

<sample Python Use Case of this>
from native import app

def OnStart():
    lay = app.CreateLayout("Linear", "FillXY,VCenter")
    lay.SetChildMargins(0, 0.03)

    for i in range(1, 6):
        btn = app.AddButton(lay, str(i), 0.6)
        btn.SetOnTouch(lambda b=btn: btnN_OnTouch(b))

    app.AddLayout(lay)

def btnN_OnTouch(btn):
    # app.eventSource == this
    app.ShowPopup("Hello " + btn.GetText())
</sample>

## Function Shortcuts
There are shortcuts to certain functions, which are
<js nobox>DW()</js> => <js nobox>app.GetDisplayWidth()</js>
<js nobox>DH()</js> => <js nobox>app.GetDisplayHeight()</js>
<js nobox>TW(txt:str, size)</js> => <js nobox>app.GetTextBounds(txt:str, size, 0, null).width</js>
\_<js nobox>PlaySound:"Uses a dummy player to play a file"(file:str\_pth)</js>
\_<js nobox>GetRandomColor:"Returns a random hexadecimal color string"(): color:str\_col</js>
<js nobox>RGB:"Make a color using fraction values"(r:num\_frc, g:num\_frc, b:num\_frc)</js>: color:str\_col
<js nobox>atob2:"atob equivalent"()</js>: base64:str\_b64 .


## Permissions
These methods can force DroidScript to add or remove specific permissions from your app.
See also: @../app/GetPermission, @../app/CheckPermission

## Translations: T()
Converts a keyword into the translated text using a [lang.json](FileStructure.htm#lang.json) file.

## Unique Callbacks: I()
DroidScript checks if a callback function already exists and uses it instead of creating a new instance.
This can cause issues when referring to other local variables in private scopes.
Therefore you can wrap your callback functions in an I() clause to force DroidScript to create a new callback instance for that scope.

<sample Using I()>

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	NewButton("Button 1", lay);
	NewButton("Button 2", lay);

	NewButton2("Button 1", lay);
	NewButton2("Button 2", lay);

	app.AddLayout( lay );
}

function NewButton(name, lay)
{
	var btn = app.AddButton( lay, name, 0.3, 0.1 );
	btn.SetMargins( 0, 0, 0, 0.02 );
	btn.SetTextColor( "red" );

	btn.SetOnTouch( function()
	{
		app.ShowPopup(name);
	});
}

function NewButton2(name, lay)
{
	var btn = app.AddButton( name, 0.3, 0.1 );
	btn.SetTextColor( "green" );
	btn.SetMargins( 0, 0.02 );

	<b>btn.SetOnTouch( I(function()
	{
		app.ShowPopup(name);
	}));</b>
}

</sample Using I()>

<sample Python Using I()>
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    NewButton("Button 1", lay)
    NewButton("Button 2", lay)

    NewButton2("Button 1", lay)
    NewButton2("Button 2", lay)

    app.AddLayout(lay)

def NewButton(name, lay):
    btn = app.AddButton(lay, name, 0.3, 0.1)
    btn.SetMargins(0, 0, 0, 0.02)
    btn.SetTextColor("red")

    <b>def button_touch():
        app.ShowPopup(name)

    btn.SetOnTouch(I(button_touch))</b>

def NewButton2(name, lay):
    btn = app.AddButton(lay, name, 0.3, 0.1)
    btn.SetTextColor("green")
    btn.SetMargins(0, 0.02)

    <b>def button2_touch():
        app.ShowPopup(name)

    btn.SetOnTouch(I(button2_touch))</b>
</sample>

### Custom Contexts: M()
The M() macro is equivalent to the I() macro, except that it accepts a custom '<js nobox>this</js>' context as first argument.

### obj.data
Alternatively you can make use of the controls **data** property and the **this** keyword in callbacks.
This way you can assign variables to the object they belong to and you still make use of the callback optimization by DroidScript:

<sample Using this.data>

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	NewButton("Button 1", lay);
	NewButton("Button 2", lay);

	app.AddLayout( lay );
}

function NewButton(name, lay)
{
	btn = app.AddButton( lay, name, 0.3, 0.1 );
	btn.SetTextColor( "green" );
	btn.SetMargins( 0, 0.02 );

	<b>btn.data.name = name;

	btn.SetOnTouch( function()
	{
		app.ShowPopup(this.data.name);
	});</b>
}

</sample Using this.data>

<sample Python Using this.data>
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    NewButton("Button 1", lay)
    NewButton("Button 2", lay)

    app.AddLayout(lay)

def NewButton(name, lay):
    btn = app.AddButton(lay, name, 0.3, 0.1)
    btn.SetTextColor("green")
    btn.SetMargins(0, 0.02)

    <b>btn.name_data = name

    btn.SetOnTouch(lambda b=btn: button2_touch(b))

def button2_touch(btn):
    app.ShowPopup(btn.name_data)</b>
</sample>
