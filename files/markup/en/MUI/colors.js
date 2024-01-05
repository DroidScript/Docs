// ------------- HEADER SECTION -------------


/** # colors #
 * @prop
 * 
 * $$ MUI.colors() $$ 
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
MUI colors are accessible through the **colors** property of the MUI object.

_Tip. To avoid longer lines assign the color set to a variable_
<js noinl>var gray = MUI.colors.blueGray</js>

To select a color and shading choose the right property of the base color objects: _lighten4_, _lighten3_, _lighten2_, _lighten1_, _darken1_, _darken2_, _darken3_, _darken4_.
<sample All Colors From Green>
<sample Change Layout Background>

### Base color objects

<js noinl>MUI.colors.red</js>
<js noinl>MUI.colors.pink</js>
<js noinl>MUI.colors.purple</js>
<js noinl>MUI.colors.deepPurple</js>
<js noinl>MUI.colors.indigo</js>
<js noinl>MUI.colors.blue</js>
<js noinl>MUI.colors.lightBlue</js>
<js noinl>MUI.colors.cyan</js>
<js noinl>MUI.colors.green</js>
<js noinl>MUI.colors.lightGreen</js>
<js noinl>MUI.colors.lime</js>
<js noinl>MUI.colors.yellow</js>
<js noinl>MUI.colors.amber</js>
<js noinl>MUI.colors.orange</js>
<js noinl>MUI.colors.deepOrange</js>
<js noinl>MUI.colors.brown</js>
<js noinl>MUI.colors.gray</js>
<js noinl>MUI.colors.blueGray</js>
 */



// ------------- SAMPLES ------------- 


    
/**
@sample All Colors From Green
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.green

    lay = MUI.CreateLayout("Linear", "VCenter, FillXY")

        btn1 = MUI.CreateButtonRaised("LIGHTEN4", 0.35, null, color.lighten4)
        lay.AddChild(btn1)

        btn2 = MUI.CreateButtonRaised("LIGHTEN3", 0.35, null, color.lighten3)
        lay.AddChild(btn2)

        btn3 = MUI.CreateButtonRaised("LIGHTEN2", 0.35, null, color.lighten2)
        lay.AddChild(btn3)

        btn4 = MUI.CreateButtonRaised("LIGHTEN1", 0.35, null, color.lighten1)
        lay.AddChild(btn4)

        btn5 = MUI.CreateButtonRaised("GREEN", 0.35, null, color.green)
        lay.AddChild(btn5)

        btn6 = MUI.CreateButtonRaised("DARKEN1", 0.35, null, color.darken1)
        lay.AddChild(btn6)

        btn7 = MUI.CreateButtonRaised("DARKEN2", 0.35, null, color.darken2)
        lay.AddChild(btn7)

        btn8 = MUI.CreateButtonRaised("DARKEN3", 0.35, null, color.darken3)
        lay.AddChild(btn8)

        btn9 = MUI.CreateButtonRaised("DARKEN4", 0.35, null, color.darken4)
        lay.AddChild(btn9)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Change Layout Background
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal

    lay = MUI.CreateLayout("linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("Choose Color", 0.4)
        btn.SetOnTouch(ShowDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var choices = [
        {name: "lighten4"},
        {name: "lighten3"},
        {name: "lighten2"},
        {name: "lighten1"},
        {name: "teal"},
        {name: "darken1"},
        {name: "darken2"},
        {name: "darken3"},
        {name: "darken4"}
    ]
    lsd = MUI.CreateListDialog("Select Color", choices)
    lsd.SetOnSelect(OnSelect)
}

function ShowDialog()
{
    lsd.Show()
}

function OnSelect(name)
{
    lay.SetBackColor(color[name])
}
 */
    
            
    
/**
@sample Python All Colors From Green
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.green

    lay = MUI.CreateLayout("Linear", "VCenter, FillXY")

    btn1 = MUI.CreateButtonRaised("LIGHTEN4", 0.35, None, color.lighten4)
    lay.AddChild(btn1)

    btn2 = MUI.CreateButtonRaised("LIGHTEN3", 0.35, None, color.lighten3)
    lay.AddChild(btn2)

    btn3 = MUI.CreateButtonRaised("LIGHTEN2", 0.35, None, color.lighten2)
    lay.AddChild(btn3)

    btn4 = MUI.CreateButtonRaised("LIGHTEN1", 0.35, None, color.lighten1)
    lay.AddChild(btn4)

    btn5 = MUI.CreateButtonRaised("GREEN", 0.35, None, color.green)
    lay.AddChild(btn5)

    btn6 = MUI.CreateButtonRaised("DARKEN1", 0.35, None, color.darken1)
    lay.AddChild(btn6)

    btn7 = MUI.CreateButtonRaised("DARKEN2", 0.35, None, color.darken2)
    lay.AddChild(btn7)

    btn8 = MUI.CreateButtonRaised("DARKEN3", 0.35, None, color.darken3)
    lay.AddChild(btn8)

    btn9 = MUI.CreateButtonRaised("DARKEN4", 0.35, None, color.darken4)
    lay.AddChild(btn9)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Change Layout Background
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lsd, color, lay
    color = MUI.colors.teal

    lay = MUI.CreateLayout("linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("Choose Color", 0.4)
    btn.SetOnTouch(ShowDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    choices = [
        {"name": "lighten4"},
        {"name": "lighten3"},
        {"name": "lighten2"},
        {"name": "lighten1"},
        {"name": "teal"},
        {"name": "darken1"},
        {"name": "darken2"},
        {"name": "darken3"},
        {"name": "darken4"}
    ]
    lsd = MUI.CreateListDialog("Select Color", choices)
    lsd.SetOnSelect(OnSelect)

def ShowDialog():
    lsd.Show()

def OnSelect(name, index):
    lay.SetBackColor(color[name])
 */
    
            