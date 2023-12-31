// ------------- HEADER SECTION -------------


/** # SetTheme #
 * Change the theme of your app to any created [Theme Object](CreateTheme.htm). The theme will only apply to objects created after the theme was set. You typically need to recreate all your controls or restart the app to apply the new theme.
 * 
 * <premium>
 * $$ app.SetTheme(theme) $$ 
 * @param {dso} theme CreateTheme
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Themes Demo
var lay = null;
var themeName = "Default";

function OnStart()
{
    CreateLayout();
}

function CreateLayout()
{
    if( lay ) app.DestroyLayout( lay );

    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    txt = app.CreateText( "Theme" );
    txt.SetTextSize( 30 );
    lay.AddChild( txt );

    spin = app.CreateSpinner( "Default,Dark,Light", 0.4, 0.1 );
    spin.SetMargins( 0, 0.05, 0, 0.05 );
    spin.SetOnTouch( spin_OnChange );
    spin.SetText( themeName );
    lay.AddChild( spin );

    tgl = app.CreateButton( "Button", .3, .1 );
    lay.AddChild( tgl );

    app.AddLayout( lay );
}

function spin_OnChange( item )
{
    themeName = item;
    var theme = app.CreateTheme( themeName );
    app.SetTheme( theme );
    CreateLayout();
}
 */
    
            
    
/**
@sample Python Themes Demo
from native import app

lay = None
themeName = "Default"

def OnStart():
    CreateLayout()

def CreateLayout():

    if lay:
        app.DestroyLayout(lay)

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("Theme")
    txt.SetTextSize(30)
    lay.AddChild(txt)

    spin = app.CreateSpinner("Default,Dark,Light", 0.4, 0.1)
    spin.SetMargins(0, 0.05, 0, 0.05)
    spin.SetOnTouch(spin_OnChange)
    spin.SetText(themeName)
    lay.AddChild(spin)

    tgl = app.CreateButton("Button", .3, .1)
    lay.AddChild(tgl)

    app.AddLayout(lay)

def spin_OnChange(item):

    themeName = item
    theme = app.CreateTheme(themeName)
    app.SetTheme(theme)
    CreateLayout()
 */
    
            