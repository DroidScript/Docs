from native import app

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a contacts intent button.
    btnPhone = app.CreateButton("Get Phone Number", 0.4, 0.1)
    btnPhone.SetOnTouch(btnPhone_OnTouch)
    lay.AddChild(btnPhone)

    # Create a Get Contacts button.
    btnContact = app.CreateButton("Get D Contacts", 0.4, 0.1)
    btnContact.SetOnTouch(btnContact_OnTouch)
    lay.AddChild(btnContact)

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches our Get Phone Number button.
def btnPhone_OnTouch():
    action = "android.intent.action.PICK"
    uri = "content://contacts"
    type = "vnd.android.cursor.dir/phone_v2"
    app.SendIntent(None, None, action, None, uri, type, None, "result", OnResult)

# Called with intent result.
def OnResult(resultCode, result):
    # Query for contact info.
    rows = app.QueryContent(result.data, "data1, display_name")
    app.ShowPopup(rows[0].display_name + " " + rows[0].data1)

# Called when user touches our Get D Contact button.
def btnContact_OnTouch():
    # Query for all contact info where name begins with D.
    uri = "content://com.android.contacts/data"
    columns = "display_name, data1"
    select = "display_name LIKE ?"
    params = "D%"
    rows = app.QueryContent(uri, columns, select, params)

    # Show result (stringify as useful way of converting JS objects to text)
    app.Alert(str(rows))