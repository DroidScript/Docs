I realized that I made a mistake. The objects `app`, `json` and `alert` are not available in Python. Instead, you need to import them from the module 'native'. Here is the updated translation:

```python
from native import app, json, alert

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    
    btnPhone = app.CreateButton("Get Phone Number", 0.4, 0.1)
    btnPhone.SetOnTouch(btnPhone_OnTouch)
    lay.AddChild(btnPhone)
    
    btnContact = app.CreateButton("Get D Contacts", 0.4, 0.1)
    btnContact.SetOnTouch(btnContact_OnTouch)
    lay.AddChild(btnContact)

    app.AddLayout(lay)


def btnPhone_OnTouch():
    action = "android.intent.action.PICK"
    uri = "content://contacts"
    type = "vnd.android.cursor.dir/phone_v2"
    app.SendIntent(None, None, action, None, uri, type, None, "result", OnResult)


def OnResult(resultCode, result):
    rows = app.QueryContent(result.data, "data1, display_name")
    app.ShowPopup(rows[0].display_name + " " + rows[0].data1)


def btnContact_OnTouch():
    uri = "content://com.android.contacts/data"
    columns = "display_name, data1"
    select = "display_name LIKE ?"
    params = ["D%"]
    rows = app.QueryContent(uri, columns, select, params)
    alert(str(rows))
```