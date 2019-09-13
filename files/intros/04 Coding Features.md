DroidScript provides some methods and flags in the sourcecode which are not available in regular JavaScript code but are interpreted internally by DroidScript.
You don't necessarily need to use these features but they are still pretty useful in some cases.

## The cfg object
The cfg object can be used to apply app options to your app before it is launched.
They should be placed at the very top of your main source script.

### cfg.Portrait, cfg.Landscape
Defines the initial screen orientation your app will launch in

### cfg.NoDom
<red>Note: The _NoDom_ option is currently not available due to GooglePlays 64bit requirement since August 2019.</red>
<!--By default your script is executed by a WebView which supports DOM elements and functions which are typically available in a web environment.

The NoDom config will make use of [googles V8 engine](https://v8.dev) instead which will cause these DOM objects not being available any more.
For example setInterval and setTimeout will not be available any more, but you can use the **app.@../app/Animate method instead**.

Furthermore the use of V8 will increase the execution speed of your app. Specifically it will increase the speed of app.* calls. Your app will commonly execute 3 to 8 times faster than usual which is quite useful when animating stuff or when creating ans modifying a huge amount of app controls.-->

### cfg.Game
The _Game_ configuration will let your app immediately run in [GameView](../app/CreateGameView.htm) mode. This way you can write your game code directly in the main script without bothering about creating the GameView container.

### cfg.Transparent
This will let your app run transparently on the HomeScreen and it will stay on top of everything even if the user launches an other app.
<premium>

## _AddPermissions, _RemovePermissions
These methods can force DroidScript to add or remove specific permissions from your app.
See also: @../app/GetPermission, @../app/CheckPermission

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

function NewButton(name, lay) {
	btn = app.CreateButton( name, 0.3, 0.1 );
	btn.SetMargins( 0, 0, 0, 0.02 );
	btn.SetTextColor( "red" );
	lay.AddChild( btn );

	btn.SetOnTouch( function()
	{
		app.ShowPopup(name);
	});
}

function NewButton2(name, lay) {
	btn = app.CreateButton( name, 0.3, 0.1 );
	btn.SetTextColor( "green" );
	btn.SetMargins( 0, 0.02 );
	lay.AddChild( btn );

	<b>btn.SetOnTouch( I(function()
	{
		app.ShowPopup(name);
	}));</b>
}
</sample Using I()>

Alternatively you can make use of the controls **data** property and the **this** keyword in callbacks.
This way you can assign variariables to the object they belong to and you still make use of the callback optimization by DroidScript:

<sample Using this.data>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	NewButton2("Button 1", lay);
	NewButton2("Button 2", lay);

	app.AddLayout( lay );
}

function NewButton2(name, lay) {
	btn = app.CreateButton( name, 0.3, 0.1 );
	btn.SetTextColor( "green" );
	btn.SetMargins( 0, 0.02 );
	lay.AddChild( btn );

	<b>btn.data.name = name;

	btn.SetOnTouch( function()
	{
		app.ShowPopup(this.data.name);
	});</b>
}
</sample Using this.data>
