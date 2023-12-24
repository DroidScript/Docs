import native

#Called when application is started.
def OnStart():
    #Create a layout with objects vertically centered.
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")

    #Create info button.
    btn1 = native.app.CreateButton("Get product Info", 0.3, 0.1)
    btn1.SetMargins(0, 0.05, 0, 0)
    btn1.SetOnTouch(btn1_OnTouch)
    lay.AddChild(btn1)

    #Create purchase button.
    btn2 = native.app.CreateButton("Purchase", 0.3, 0.1)
    btn2.SetMargins(0, 0.05, 0, 0)
    btn2.SetOnTouch(btn2_OnTouch)
    lay.AddChild(btn2)

    #Create purchases button.
    btn3 = native.app.CreateButton("Get Purchases", 0.3, 0.1)
    btn3.SetMargins(0, 0.05, 0, 0)
    btn3.SetOnTouch(btn3_OnTouch)
    lay.AddChild(btn3)

    #Add layout to app.
    native.app.AddLayout(lay)

    #Create play store object.
    playStore = native.app.CreatePlayStore()

#Called when user touches info button.
def btn1_OnTouch():
    #Query PlayStore for in-app-billing info for given items.
    #(Results are sent to the 'OnInfo' callback function)
    playStore.GetBillingInfo("android.test.purchased", OnInfo)

#Show Play Store item info.
def OnInfo(items):
    native.app.Alert(items[0].title + " " + items[0].price)

#Called when user touches purchase button.
def btn2_OnTouch():
    #Start the purchase process.
    playStore.Purchase("android.test.purchased", "xbx345xbx")

#Called when user touches purchases button.
def btn3_OnTouch():
    #Query PlayStore for all user's purchases.
    #(Results are sent to the 'OnPurchases' callback function)
    playStore.GetPurchases(OnPurchases)

#Show Play Store item info.
def OnPurchases(items):
    native.app.Alert(items[0].productId + " " + items[0].purchaseState)