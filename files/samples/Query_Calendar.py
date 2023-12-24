```python
dotw = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
rows = []

def OnStart():
    global lay, lst
    lay = native.app.CreateLayout("linear", "FillXY")
    lst = native.app.CreateList("", 1, -1, "fillXY")
    lay.AddChild(lst)
    lst.SetOnTouch(lst_OnTouch)
    lst.SetTextColor1("#eeeeee")
    lst.SetTextColor2("#88ffff")
    native.app.AddLayout(lay)
    GetAppointments(30)

def GetAppointments(days):
    global rows
    d1 = int(native.MUI.GetTime())
    d2 = int(native.MUI.GetTime()) + (1000 * 60 * 60 * 24 * days)
    uri = "content://com.android.calendar/instances/when/"+str(d1)+"/"+str(d2)
    select = None
    params = None
    columns = "title, begin, end, allDay,description,eventLocation"
    rows = native.app.QueryContent(uri, columns, select, params)
    rows.sort(key=lambda x: float(x['begin']))

    for rec in rows:
        dz1 = native.MUI.GetDateString(float(rec["begin"]))
        dz2 = native.MUI.GetDateString(float(rec["end"]))
        body = dz1
        if rec["allDay"] != "1":
            body = dz1 + " - " + dz2
        lst.AddItem(rec["title"], body)

def lst_OnTouch(title, body, icon, index):
    rec = rows[index]
    dat = native.MUI.CreateDate(int(rec["begin"]))
    day = dotw[dat.get("dayOfWeek")]
    tim = dat.format("MM/DD/YYYY HH:mm:ss")
    if rec["allDay"] == "1":
        tim = dat.format("MM/DD/YYYY")
    
    s = "title: " + rec["title"] + "\n\n" + "desc: " + rec["description"] + "\n\n" + day + "\n" + tim + "\n" + "location: " + rec["eventLocation"]
    native.app.ShowPopup(s)
```