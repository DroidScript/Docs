// ------------- HEADER SECTION -------------


/** # ClearData #
 * @brief Deletes app.Save*() storage
 * ClearData deletes variables saved via app.Save*(). The file parameter is optional. If given, the specified file will be used, otherwise it will be located in the apps private Folder.
 *
 * See Also: @SetData,
 *
 * See Also: @GetData
 * $$ app.ClearData(file?) $$
 * @param {str_ptf} [file]
*/




// ------------- SAMPLES -------------



/**
@sample Save, Load and Clear Data
var file = "demofile";

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    var text = getValues();
    txtValues = app.CreateText( text, .5, -1, "multiline,left" );
    lay.AddChild( txtValues );

    btnClear = app.CreateButton( "Clear Data", 0.5, 0.1 );
    btnClear.SetOnTouch( btnClear_OnTouch );
    lay.AddChild( btnClear );

    app.AddLayout( lay );
}

function btnClear_OnTouch()
{
    <b>app.ClearData( file );</b>
    txtValues.SetText( getValues() );
    app.ShowPopup( "Data Cleared." );
}

function getValues()
{
    runCount = app.LoadNumber( "runs", 0, file )
    
    data = (
        "saved Text: " + app.LoadText( "value", "No Value stored.", file ) + "\n" +
        "click count: " + runCount  + "\n" +
        "first start: " + app.LoadBoolean( "first", true, file ) + "\n");
    
    app.SaveNumber( "runs", runCount + 1, file )
    app.SaveBoolean( "first", false, file )
        
    return data
}
 */



/**
@sample Python Save, Load and Clear Data
from native import app

file = "demofile"
txtValues = None

def OnStart():
    global txtValues
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    text = getValues()
    txtValues = app.CreateText( text, .5, -1, "multiline,left" )
    lay.AddChild( txtValues )

    btnClear = app.CreateButton( "Clear Data", 0.5, 0.1 )
    btnClear.SetOnTouch( btnClear_OnTouch )
    lay.AddChild( btnClear )

    app.AddLayout( lay )

def btnClear_OnTouch():
    <b>app.ClearData( file )</b>
    txtValues.SetText( getValues() )
    app.ShowPopup( "Data Cleared." )

def getValues():
    runCount = app.LoadNumber( "runs", 0, file )

    data = f"""
saved Text: {app.LoadText( "value", "No Value stored.", file )}
run count: {runCount}
first start: {app.LoadBoolean( "first", True, file )}
"""

    app.SaveNumber( "runs", runCount + 1, file )
    app.SaveBoolean( "first", False, file )

    return data

 */

