from native import app

"""
In-App subscription sample -
global productId

Use this sample as a template for setting up Google Play subscriptions in
your Apps. See the following link for more information:-

http://developer.android.com/google/play/billing/billing_subscriptions.html

Notes: If your email address is listed in the licence testing section of the
developer console settings page, then using this sample will result in a test
subscription with an order id of 1234 which recurs daily (even if configured
for monthly) and you will not be charged. Subscriptions can be cancelled
in the Google Play App found on your device (they will stay active for the
remains of the period that has been purchased).
"""

# Global variables.
subscribed = False
productId = "subs_premium1"  # <-- change this to your product id.

# Called when application is started.
def OnStart():
    global playStore, txt
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create text box to show purchase status.
    txt = app.AddText(lay, "Not Purchased")
    txt.SetMargins(0, 0, 0, 0.1)
    txt.SetTextSize(22)

    # Create a subscription info button.
    btn = app.AddButton(lay, "Show Subscription Info", 0.6)
    btn.SetOnTouch(ShowSubsInfo)

    # Add layout to app.
    app.AddLayout(lay)

    # Create a playstore object.
    playStore = app.CreatePlayStore()

    # Get user's status after a short time.
    setTimeout(GetStatus, 100)

# Get the user's purchase status.
def GetStatus():
    playStore.GetPurchases(OnPurchases, "SUBS")

# Show user's purchases.
def OnPurchases(items):
    for item in items:
        if item["productId"] == productId and item["purchaseState"] == 0:
            txt.SetText("Purchased!")
            subscribed = True

# Show subscription info box.
def ShowSubsInfo():
    global txtPremPrice, s
    # Create dialog window.
    dlgPrem = app.CreateDialog("My App Subscription")
    layPrem = app.CreateLayout("linear", "vertical")

    # Create info text.
    s = "Subscription features:<br><br>" \
        "&bull; Free access to <font color=#33B5E5>All Levels</font>," \
        " including the new All You Can Eat level!<br><br>" \
        "&bull; Access to <font color=#33B5E5>Special Features!</font><br><br>" \
        "&bull; Other <font color=#33B5E5>Enticing</font> stuff!<br><br>"
    txtPrem = app.AddText(layPrem, s, 0.8, 0.3, "Left,Html,MultiLine")
    txtPrem.SetMargins(0.05, 0.02, 0.05, 0.02)
    txtPrem.SetTextSize(18)
    txtPrem.SetTextColor("#ffffff")

    # Create price text.
    txtPremPrice = app.AddText(layPrem, "", 0.8)
    txtPremPrice.SetTextColor("#ffffff")
    txtPremPrice.SetTextSize(20)
    layPrem.AddChild(txtPremPrice)

    # Create a subscribe button.
    btnGoPrem = app.AddButton(layPrem, "Subscribe!", 0.4, 0.1)
    btnGoPrem.SetMargins(0, 0.04, 0, 0.02)
    btnGoPrem.SetTextSize(16)
    btnGoPrem.SetOnTouch(btnGo_OnTouch)

    # Add dialog layout and show dialog.
    dlgPrem.AddLayout(layPrem)
    dlgPrem.Show()

    # Show price after short wait.
    setTimeout(ShowPrice, 100)

# Show subscription price.
def ShowPrice():
    playStore.GetBillingInfo(productId, OnStoreInfo, "SUBS")

# Show Play Store subscription price.
def OnStoreInfo(items):
    if items:
        txtPremPrice.SetText(items[0]["price"] + "/month")

# Show the subscription sign up page.
def btnGo_OnTouch():
    global edtGo, s, email
    dlgGo = app.CreateDialog("My App Subscription")
    layGo = app.CreateLayout("linear", "vertical,fillxy")

    s = "Please enter the email you wish to associate with " \
        "your subscription"
    txtPrem = app.AddText(layGo, s, 0.8, -1, "Left,MultiLine")
    txtPrem.SetMargins(0.05, 0.02, 0.05, 0.02)
    txtPrem.SetTextSize(18)
    txtPrem.SetTextColor("#ffffff")

    email = app.GetUser()
    edtGo = app.AddTextEdit(layGo, email, 0.8, -1)
    edtGo.SetMargins(0, 0.04, 0, 0)

    btnGo = app.AddButton(layGo, "Sign me up!", 0.4, 0.1)
    btnGo.SetMargins(0, 0.04, 0, 0.02)
    btnGo.SetTextSize(16)
    btnGo.SetOnTouch(btnGo_OnClick)

    dlgGo.AddLayout(layGo)
    dlgGo.Show()

# Handle the sign up.
def btnGo_OnClick():
    global userId
    userId = edtGo.GetText().strip()
    if userId and "@" in userId:
        playStore.Purchase(productId, "MyToken", OnPurchased, "SUBS")

# Handle completed purchase.
def OnPurchased(prodId, orderId, purchToken, devToken, packageName):
    print(prodId + " " + orderId + " " + purchToken)

    # Register user's email.
    try:
        url = "http://mycompany.org/registersubs.php"
        data = {
            "user": userId,
            "product": prodId,
            "order": orderId,
            "purchase