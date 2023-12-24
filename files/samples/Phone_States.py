from native import app

# Called when application is started.
def OnStart():
    global txt, state
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create text control for logging.
    txt = app.CreateText("", 0.9, 0.9, "MultiLine,Left")
    txt.SetTextSize(22)
    lay.AddChild(txt)

    # Add layout to app.
    app.AddLayout(lay)

    # Set list of phone states to watch.
    types = "CellLocation, DataConnection, DataActivity, CallState," + "ServiceState, SignalStrength, CallForwarding, MessageWaiting"

    # Start watching phone states.
    state = app.CreatePhoneState(types)
    state.SetOnChange(state_OnChange)
    state.Start()

# Called when phone states change.
def state_OnChange(type, data):
    if type == "CellLocation":
        txt.Log("cellId: " + data.cellId)
        txt.Log("area code: " + data.areaCode)
    elif type == "DataConnection":
        txt.Log("data state: " + data.state)
        txt.Log("network type: " + data.networkType)
    elif type == "DataActivity":
        txt.Log("data: " + data)
    elif type == "CallState":
        txt.Log("call state: " + data.state)
        txt.Log("number: " + data.number)
    elif type == "ServiceState":
        txt.Log("service state: " + data)
    elif type == "SignalStrength":
        txt.Log("signal strength: " + data)
    elif type == "MessageWaiting":
        txt.Log("message: " + data)
    elif type == "CallForwarding":
        txt.Log("forwarding: " + data)