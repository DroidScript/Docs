I forgot to import the `alert` function from the `native` module. Here's the updated code:

```python
from native import app, ui, alert

def OnStart():
    lay = ui.addLayout("linear", "fillxy")

    edit = ui.addTextEdit(lay, "Hello", 1, 0.9, "")
    edit.setMargins(0, 0, 0, 0.01)
    edit.setBackColor("#1a1a1b")
    edit.setTextColor("#ffffff")
    lay.addChild(edit)

    layBut = ui.addLayout(lay, "linear", "horizontal")
    lay.addChild(layBut)

    btns = ["[fa-undo]", "[fa-search]", "[fa-file]", "[fa-save]", "[fa-repeat]"]
    for i in range(len(btns)):
        btn = ui.addButton(layBut, btns[i], -1, -1, "FontAwesome")
        btn.icon = btns[i]
        btn.setTextSize(22)
        btn.setOnTouch(btns_OnTouch)
        layBut.addChild(btn)

    app.AddLayout(lay)

def btns_OnTouch():
    if this.icon == "[fa-undo]":
        edit.Undo()
    elif this.icon == "[fa-repeat]":
        edit.Redo()
    elif this.icon == "[fa-search]":
        alert("Todo!")
    elif this.icon == "[fa-file]":
        edit.SetText(app.ReadFile("/Storage/testfile.txt"))
    elif this.icon == "[fa-save]":
        app.WriteFile("/Storage/testfile.txt", edit.GetText())
```