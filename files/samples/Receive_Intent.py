from native import app

#This example shows how to receive data from other apps
#like 'Tasker' which allow sending of Android Intents.

#Called when application is started.
def OnStart():
    global txt1
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create a text label and text boxt.
    txt = app.CreateText("Intent Data:")
    lay.AddChild(txt)
    txt1 = app.CreateText("", 0.95, 0.6, "left,multiline")
    txt1.SetBackColor("#ff222222")
    txt1.SetTextSize(18)
    lay.AddChild(txt1)

    #Add layout to app.
    app.AddLayout(lay)

#Handle data sent from other apps.
def OnData(isStartUp):
    #Display intent data.
    intent = app.GetIntent()
    if intent:
        #Extract main data.
        s = "action: " + intent.action + "\n"
        s += "type: " + intent.type + "\n"
        s += "data: " + intent.data + "\n\n"

        #Extract extras.
        s += "extras:\n"
        for key in intent.extras:
            s += key + ": " + str(intent.extras[key]) + "\n"

        txt1.SetText(s)