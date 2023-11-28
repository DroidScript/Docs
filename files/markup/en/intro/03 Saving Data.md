In many cases you need to store user specific data like app settings on the users device.
DroidScript provides some functions which makes it easier to handle this.
<grey>Note: All explained methods are listed in the [Database](../app_Database.htm) section.</grey>

## Save data during one session
Some settings are just meaningful in a current running program.
For example if you keep track of the current app state (opened tabs, documents, pages).
For this purpose you can use the **app.@../app/SetData** and the **app.@../app/GetData** method.
To clear stored data use **app.@../app/ClearData**.

## Save data across multiple app starts
Many apps support in-app settings which will be loaded after each app start. The app object has several methods to save and load different types of data.
To clear a saved value use the **app.@../app/ClearValue** method.
<table>
  <tr>
    <th>Type</th>
    <th>Save</th>
    <th>Load</th>
  </tr>
  <tr>
    <td>Boolean</td>
    <td width="10%">@../app/SaveBoolean</td>
    <td>@../app/LoadBoolean</td>
  </tr>
  <tr>
    <td>Number</td>
    <td width="15%">@../app/SaveNumber</td>
    <td>@../app/LoadNumber</td>
  </tr>
  <tr>
    <td>String</td>
    <td width="15%">@../app/SaveText</td>
    <td>@../app/LoadText</td>
  </tr>
  <tr>
    <td>JSON (any)</td>
    <td width="15%">@../app/SaveJson</td>
    <td>@../app/LoadJson</td>
  </tr>
</table>


If you have many properties to save you can use an object structure instead of saving each value on their own.
Load settings: <js>var conf = JSON.parse( app.LoadText( "settings", "{}" ));</js>
Save settings: <js>app.SaveText( "settings", JSON.stringify( conf ));</js>

<sample App Settings>

<b>// default settings
var settings = { version: "1.0", startNo: 0 };

function LoadSettings()
{
	var tmp = JSON.parse(app.LoadText( "settings", "{}" ));

	// update settings object
	for(var i in tmp) settings[i] = tmp[i];
}

function SaveSettings()
{
	app.SaveText( "settings", JSON.stringify(settings) );
}</b>

function OnStart()
{
	LoadSettings();
	settings.startNo++;
	app.ShowPopup("Started " + settings.startNo + ". time");
	SaveSettings();
}

</sample App Settings>

## Using Databases
Using Databases is the most elaborate variant of the three.

<red>You should only consider using one if you have to perform complex queries on a large amount of datasets.</red>
Using JSON objects is more practicable and performant in most cases.

DroidScript provides an extra @../app/OpenDatabase component for databases which uses the SQLitePlugin [cordova-sqlite-storage](https://github.com/xpbrew/cordova-sqlite-storage).

For a demo Have a look at the [Database]{OpenSample("Database")} example.
