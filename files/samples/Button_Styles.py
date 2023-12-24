Translated code (Python):

```python
def OnStart():
    lay = app.CreateLayout("Linear", "Vertical,FillXY")
    lay.SetChildMargins(0.01, 0.01, 0.01, 0.01)

    # --- Standard buttons ---

    layDark = app.CreateLayout("Linear", "Vertical")
    layDark.SetPadding(0.1, 0.05, 0.1, 0.05)
    lay.AddChild(layDark)

    b1 = app.AddButton(layDark, "Normal", 0.7)
    b2 = app.AddButton(layDark, "Gray", 0.7, -1, "Gray")
    b3 = app.AddButton(layDark, "Alum", 0.7, -1, "Alum")

    # --- Custom buttons ---

    layLight = app.CreateLayout("Linear", "Vertical")
    layLight.SetBackColor("white")
    layLight.SetPadding(0.1, 0.05, 0.1, 0.05)
    lay.AddChild(layLight)

    # style params: color1,color2,radius,strokeClr,strokeWidth,shadow
    b4 = app.AddButton(layLight, "Custom", 0.7, -1, "Custom")
    b4.SetTextColor("#444444")
    b4.SetStyle("#fafafa", "#fafafa", 5, "#999999", 0, 1, "#ff9000")

    b5 = app.AddButton(layLight, "Custom", 0.7, -1, "Custom")
    b5.SetStyle("#4285F4", "#4285F4", 4)

    b6 = app.AddButton(layLight, "Custom", 0.7, -1, "Custom")
    b6.SetStyle("#ff0000", "#aa0000", 10)
    b6.SetTextShadow(2, 0, 1, "#880000")

    b7 = app.AddButton(layLight, "<i>Custom<i>", 0.7, -1, "Custom,HTML")
    b7.SetStyle("#22aa22", "#22aa22", 20, "#228822", 2, 0)

    txt = "<font color=#ff4444>C</font>" \
        + "<font color=#228822>usto</font>" \
        + "<font color=#2222ff>m</font>"
    b8 = app.AddButton(layLight, txt, 0.7, -1, "Custom,HTML")
    b8.SetStyle("#ffffff", "#cccccc", 20, "#999999", 1, 0)

    app.AddLayout(lay)
```