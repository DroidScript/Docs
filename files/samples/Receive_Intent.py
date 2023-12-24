Translated code:

```python
#This example shows how to receive data from other apps
#like 'Tasker' which allow sending of Android Intents.

#Called when application is started.
def OnStart():
    #Create a layout with objects vertically centered.
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")    

    #Create a text label and text boxt.
    txt = native.app.CreateText("Intent Data:")
    lay.AddChild(txt)
    txt1 = native.app.CreateText("", 0.95, 0.6, "left,multiline")
    txt1.SetBackColor("#ff222222")
    txt1.SetTextSize(18)
    lay.AddChild(txt1)
    
    #Add layout to app.
    native.app.AddLayout(lay)

#Handle data sent from other apps.
def OnData(isStartUp):
    #Display intent data.
    intent = native.app.GetIntent()
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
```