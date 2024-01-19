
/*
CloudStore data demo

The CloudStore provides basic cloud storage for a small set of data
and/or media files for Premium users. This can be used for hosting
your PlayStore privacy policy or for creating dynamic splash screens
or news flashes, or storing shared data for your apps.

Please contact support@droidscript.org for your unique API key.
Docs for CloudStore can be found here - https://enjine-io.github.io/cloudstore,
however you can ignore the 'Including CloudStore' section of these docs as
a CloudStore component is already included in DroidScript.

Note: If you press the buttons too fast the response will be delayed
as the maximum CloudStore rate is one API call every 3 seconds.
*/

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Add a button to save data to cloud.
	btnSave = app.AddButton( lay, "Save", 0.3, 0.1 )
	btnSave.SetOnTouch( btnSave_OnTouch )
	
	//Add a button to load data from cloud.
	btnLoad = app.AddButton( lay, "Load", 0.3, 0.1 )
	btnLoad.SetOnTouch( btnLoad_OnTouch )
	
	//Add a button to merge data to cloud.
	btnSave = app.AddButton( lay, "Merge", 0.3, 0.1 )
	btnSave.SetOnTouch( btnMerge_OnTouch )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create CloudStore component.
	//(Note: this is a dummy key and will show an error)
	cloud = app.CreateCloudStore( "L994uhSixfh8UBgUb66T" )
}

//Called when user touches our Save button.
function btnSave_OnTouch()
{	
    //Save a new shopping list to the cloud.
    app.ShowProgress()
	cloud.Save( "Shopping_List", {"Apples":8,"Oranges":6}, OnSave )
}

//Handle the CloudStore response.
function OnSave( response )
{
    app.HideProgress()
    if( response.error ) app.ShowPopup( "Error: " + response.error + ", " + response.message )
    else app.ShowPopup( response.message )
}

//Called when user touches our Load button.
function btnLoad_OnTouch()
{
    //Load a shopping list from the cloud.
    app.ShowProgress()
	cloud.Load( "Shopping_List", OnLoad )
}

//Handle the CloudStore response.
function OnLoad( response )
{
    app.HideProgress()
    if( response.error ) app.ShowPopup( "Error: " + response.error + ", " + response.message )
    else app.ShowPopup( JSON.stringify(response.data) )
}

//Called when user touches our Merge button.
function btnMerge_OnTouch()
{
	//Update our shopping list with a new item and change the value of existing items.
	app.ShowProgress()
    cloud.Merge( "Shopping_List", {"Apples":8,"Oranges":10,"Bananas":8}, OnMerge )
}

//Handle the CloudStore response.
function OnMerge( response )
{
    app.HideProgress()
    if( response.error ) app.ShowPopup( "Error: " + response.error + ", " + response.message )
    else app.ShowPopup( response.message )
}
