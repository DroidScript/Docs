from native import app

dotw = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
rows = []

def OnStart():
    global lst
    lay = app.CreateLayout("linear", "FillXY")
    lst = app.CreateList("", 1, -1, "fillXY")
    lay.AddChild(lst)
    lst.SetOnTouch(lst_OnTouch)
    lst.SetTextColor1("#eeeeee")
    lst.SetTextColor2("#88ffff")
    app.AddLayout(lay)
    GetAppointments(30)

def GetAppointments(days):
    global rows, body
    d1 = int(MUI.GetTime())
    d2 = int(MUI.GetTime()) + (1000 * 60 * 60 * 24 * days)
    uri = "content://com.android.calendar/instances/when/"+str(d1)+"/"+str(d2)
    select = None
    params = None
    columns = "title, begin, end, allDay,description,eventLocation"
    rows = app.QueryContent(uri, columns, select, params)
    rows.sort(key=lambda x: float(x['begin']))

    for rec in rows:
        dz1 = MUI.GetDateString(float(rec["begin"]))
        dz2 = MUI.GetDateString(float(rec["end"]))
        body = dz1
        if rec["allDay"] != "1":
            body = dz1 + " - " + dz2
        lst.AddItem(rec["title"], body)

def lst_OnTouch(title, body, icon, index):
    rec = rows[index]
    dat = MUI.CreateDate(int(rec["begin"]))
    day = dotw[dat.get("dayOfWeek")]
    tim = dat.format("MM/DD/YYYY HH:mm:ss")
    if rec["allDay"] == "1":
        tim = dat.format("MM/DD/YYYY")

    s = "title: " + rec["title"] + "\n\n" + "desc: " + rec["description"] + "\n\n" + day + "\n" + tim + "\n" + "location: " + rec["eventLocation"]
    app.ShowPopup(s)