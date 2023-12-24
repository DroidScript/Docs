/*
 In-App purchasing sample - 

 This sample demonstrated how to query a user's purchased Google Play items,
 please see the following link for more information:-
 
 http://developer.android.com/google/play/billing/index.html

 Notes: If your email address is listed in the 'licence testing' section of the
 developer console settings page, any purchases you make will not be charged. 
*/

//Set to "IAP" or "SUBS"
var mode = "IAP"

//Change this list to your own product id's.
var products = "plugin_apkbuilder,plugin_spheroball,subs_premium1";
var productId = "plugin_spheroball";
    
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	
	//Create an 'info' button.
	btnInfo = app.CreateButton( "Get Store Info", 0.5, 0.1 )
	btnInfo.SetOnTouch( btnInfo_OnTouch )
	lay.AddChild( btnInfo )

	//Create a 'purchases'  button.
	btnPurch = app.CreateButton( "Get Purchases", 0.5, 0.1 )
	btnPurch.SetOnTouch( btnPurch_OnTouch )
	lay.AddChild( btnPurch )
	
	//Create a 'buy'  button.
	btnBuy = app.CreateButton( "Buy", 0.5, 0.1 )
	btnBuy.SetOnTouch( btnBuy_OnTouch )
	lay.AddChild( btnBuy )
	
	//Create a text control to show results.
	txt = app.CreateText( "", 0.9, 0.5, "Multiline,Left" )
	txt.SetMargins( 0,0.1,0,0 )
	txt.SetTextColor( "#ffffffff" )
	txt.SetBackColor( "#ff222222" )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create a playstore object.
	playStore = app.CreatePlayStore()
}

//Called when user touches our 'Info' button.
function btnInfo_OnTouch()
{
    //Get product info from Google Play.
    //(Only paid items will be listed)
    playStore.GetBillingInfo( products, OnStoreInfo, mode )
}

//Show Play Store prices.
function OnStoreInfo( items )
{
    txt.Log( "Prices:" )
    for( var i=0; i<items.length; i++ )
    {
        txt.Log( "ProductId = " + items[i].productId )
        txt.Log( "Price = " + items[i].price )
    }
}

//Called when user touches our 'Purchases' button.
function btnPurch_OnTouch()
{
    playStore.GetPurchases( OnPurchases, mode )
}

//Show user's purchases.
function OnPurchases( items )
{
    txt.Log( "\nPurchases:" )
    for( var i=0; i<items.length; i++ )
    {
        txt.Log( "ProductId = " + items[i].productId )
        txt.Log( "Purchased = " + (items[i].purchaseState==0) )
    }
}

//Buy an IAP item.
function btnBuy_OnTouch()
{
    playStore.Purchase( productId, "MyToken", OnPurchased, mode )
}

//Handle completed purchase.
function OnPurchased( prodId, orderId, purchToken, devToken, packageName )
{
    console.log( prodId +" "+ orderId +" "+ purchToken )
    app.Alert( "Item purchased!", "My App" )
}


