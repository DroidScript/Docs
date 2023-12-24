# Called when application is started.
def OnStart():
    # Lock screen orientation to Portrait.
    app.SetOrientation("Portrait")

    # Create vertical layout that fills the screen.
    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    # Create a text control to show compass data.
    txt = app.CreateText("", 1.0, 1.0, "Left,Multiline")
    txt.SetTextColor("#ffffffff")
    txt.SetTextSize(32)
    lay.AddChild(txt)

    # Create and start sensor object in Orientation mode.
    orient = app.CreateSensor("Orientation", "slow")
    orient.SetOnChange(orient_OnChange)
    orient.SetMinChange(0.5)
    orient.Start()

    # Add main layout to app.
    app.AddLayout(lay)


# Called when 'Orientation' sensor changes.
# All values are angles in degrees.
#
# Azimuth: angle between the magnetic north direction and the Y axis,
# around the Z axis (0 to 359). 0=North, 90=East, 180=South, 270=West.
#
# Pitch: rotation around X axis (-180 to 180), with positive values when
# the z-axis moves toward the y-axis.
#
# Roll: rotation around Z axis (-90 to 90), with positive values when
# the y-axis moves toward the x-axis.
def orient_OnChange(azimuth, pitch, roll, time):
    txt.SetText("Azimuth = " + str(azimuth) + "\n Pitch=" +
                str(pitch) + "\n Roll = " + str(roll))