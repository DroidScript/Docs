// ------------- HEADER SECTION -------------


/** # CreateDataTable #
 * @abbrev tbl
 * @brief Creates a new DataTable Control.
 *
 * $$ tbl = MUI.CreateDataTable(columns, values, width=-1, height=-1, options?) $$
 * @param {lst} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
 * @param {lst} values An array of strings of the form Val1:Val2:Val3...
 * @param {num} [width=-1] Fraction of the screen width
 * @param {num} [height=-1] Fraction of the screen height
 * @param {str_com} [options] Selectable
 * @returns obj
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Data tables display sets of data across rows and columns. You can pass options and and configure your header and rows to add specific functionality.

<sample Basic>

Add **Sortable** to the header type if you want the column to be sortable when click. You can also add the **Numeric** type to right align text for number values.

<sample Sortable and Numeric Column>

Add **Selectable** option to make the rows in the table selectable.

<sample Selectable and Dark>

You can also add a footer into your table if you want controls associated with table interactions.

<sample With Footer>
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AppendRow ###
 * @brief Append a row to the table.
 * Add a row at the end of the table. The same as AddRow
 * $$ tbl.AppendRow(row) $$
 * @param {str} row A colon ':' separated entries for the new row.
 */


/** ### PrependRow ###
 * @brief Prepend a row to the table.
 * Add a row at the beginning of the table.
 * $$ tbl.PrependRow(row) $$
 * @param {str} row A colon ':' separated entries for the new row.
 */


/** ### RemoveRows ###
 * Remove a row at a given index or indexes
 * $$ tbl.RemoveRows(index) $$
 * @param {lst} index An array of indexes you want to remove. It can also be just a number for a single index.
 */


/** ### GetSelectedRows ###
 * Get the selected rows. This function is synchronous. You need to pass a callback.
 * $$ tbl.GetSelectedRows(callback) $$
 * @param {fnc_json} callback {"pNames":["indexes"],"pTypes":["lst-An array of indexes."]}
 */


/** ### SetOnSelectionStatus ###
 * Calls a function when the selection status of the table changes.
 * $$ tbl.SetOnSelectionStatus(callback) $$
 * @param {fnc_json} callback {"pNames":["isTrue"],"pTypes":["bin-True if there is an active selection, false otherwise."]}
 */


/** ### SetOnTouch ###
 * Calls a function when a row in the table is click.
 * $$ tbl.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["row","index"],"pTypes":["str-The row data separated by colon (:)","num_int-The index of row being click."]}
 */


/** ### SetOnReady ###
 * Calls a function when the Table is ready and rendered already.
 * $$ tbl.SetOnReady(callback) $$
 * @param {fnc_json} callback {"pNames":[],"pTypes":[]}
 */


/** ### SetOnProgress ###
 * Calls a function when the Table is on progress
 * $$ tbl.SetOnProgress(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["num-The progress of the loading table from 0-100"]}
 */


/** ### SetRows ###
 * Set the rows of the table to a new values of data.
 * $$ tbl.SetRows(values) $$
 * @param {lst} values A comma separated strings of the form "Val1:Val2:Val3:..."
 */


/** ### AddFooter ###
 * Add a footer layout to the table where you can add controls.
 * $$ tbl.AddFooter(type, options?, height?) $$
 * @param {str} type Type of layout. Can be Linear|Absolute|Frame. Default to Linear
 * @param {str} [options] A comma separated layout options. Default to Horizontal|Right|VCenter
 * @param {num} [height] A fraction of the screen height.
 * @returns dso-@../app/CreateLayout
 */


/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetMargins */

/** @extern SetPosition */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")
        
        var headers = ["ID", "Name", "Age", "Color"]
        var values = [
            "1:Robb Stark:14:Blue",
            "2:Sansa Stark:11:Teal",
            "3:Arya Stark:9:Green",
            "4:Bran Stark:7:Orange",
            "5:Rickon Stark:Grey"
        ]
        var table = MUI.CreateDataTable(headers, values, 0.96, 0.6)
        lay.AddChild(table)

    app.AddLayout(lay)
}
 */



/**
@sample Sortable and Numeric Column
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")
        
        var headers = ["ID", "Name:Sortable", "Age:Sortable", "Color"]
        var values = [
            "1:Robb Stark:14:Blue",
            "2:Sansa Stark:11:Teal",
            "3:Arya Stark:9:Green",
            "4:Bran Stark:7:Orange",
            "5:Rickon Stark:2:Grey",
            "6:Theon Greyjoy:18:Brown",
            "7:Jon Snow:11:Red"
        ]
        var table = MUI.CreateDataTable(headers, values, 0.96, 0.6)
        lay.AddChild(table)

    app.AddLayout(lay)
}
 */



/**
@sample Selectable and Dark
cfg.Dark
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")
        
        var headers = ["ID", "Name:Sortable", "Age", "Color"]
        var values = [
            "1:Robb Stark:14:Blue",
            "2:Sansa Stark:11:Teal",
            "3:Arya Stark:9:Green",
            "4:Bran Stark:7:Orange",
            "5:Rickon Stark:2:Grey",
            "6:Theon Greyjoy:18:Brown",
            "7:Jon Snow:11:Red"
        ]
        var table = MUI.CreateDataTable(headers, values, 0.96, 0.6, "Selectable")
        lay.AddChild(table)

    app.AddLayout(lay)
}
 */



/**
@sample With Footer
cfg.Dark
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")
        
        var headers = ["ID", "Name:Sortable", "Age"]
        var values = [
            "1:Robb Stark:14",
            "2:Sansa Stark:11",
            "3:Arya Stark:9",
            "4:Bran Stark:7",
            "5:Rickon Stark:2"
        ]
        var table = MUI.CreateDataTable(headers, values, 0.96, 0.6, "Selectable")
        lay.AddChild(table)

        var ftr = table.AddFooter("Linear", "Horizontal, Right, VCenter", 0.09)

        var fBtn = MUI.CreateButtonFlat('REMOVE SELECTED')
        fBtn.SetEnabled(false)
        ftr.AddChild(fBtn)
        fBtn.SetOnTouch(function(){
            table.GetSelectedRows(function(x){
                table.RemoveRows(x)
            })
        })
        table.SetOnSelectionStatus(function(c) {
            if(c) fBtn.SetEnabled(true)
            else fBtn.SetEnabled(false)
        })

    app.AddLayout(lay)
}
 */



/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    headers = ["ID", "Name", "Age", "Color"]
    values = [
        "1:Robb Stark:14:Blue",
        "2:Sansa Stark:11:Teal",
        "3:Arya Stark:9:Green",
        "4:Bran Stark:7:Orange",
        "5:Rickon Stark:Grey"
    ]
    table = MUI.CreateDataTable(headers, values, 0.96, 0.6)
    lay.AddChild(table)

    app.AddLayout(lay)
 */



/**
@sample Python Sortable and Numeric Column
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    headers = ["ID", "Name:Sortable", "Age:Sortable", "Color"]
    values = [
        "1:Robb Stark:14:Blue",
        "2:Sansa Stark:11:Teal",
        "3:Arya Stark:9:Green",
        "4:Bran Stark:7:Orange",
        "5:Rickon Stark:2:Grey",
        "6:Theon Greyjoy:18:Brown",
        "7:Jon Snow:11:Red"
    ]
    table = MUI.CreateDataTable(headers, values, 0.96, 0.6)
    lay.AddChild(table)

    app.AddLayout(lay)
 */



/**
@sample Python Selectable and Dark
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    headers = ["ID", "Name:Sortable", "Age", "Color"]
    values = [
        "1:Robb Stark:14:Blue",
        "2:Sansa Stark:11:Teal",
        "3:Arya Stark:9:Green",
        "4:Bran Stark:7:Orange",
        "5:Rickon Stark:2:Grey",
        "6:Theon Greyjoy:18:Brown",
        "7:Jon Snow:11:Red"
    ]
    table = MUI.CreateDataTable(headers, values, 0.96, 0.6, "Selectable")
    lay.AddChild(table)

    app.AddLayout(lay)
 */



/**
@sample Python With Footer
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    headers = ["ID", "Name:Sortable", "Age"]
    values = [
        "1:Robb Stark:14",
        "2:Sansa Stark:11",
        "3:Arya Stark:9",
        "4:Bran Stark:7",
        "5:Rickon Stark:2"
    ]
    table = MUI.CreateDataTable(headers, values, 0.96, 0.6, "Selectable")
    lay.AddChild(table)

    ftr = table.AddFooter("Linear", "Horizontal, Right, VCenter", 0.09)

    fBtn = MUI.CreateButtonFlat('REMOVE SELECTED')
    fBtn.SetEnabled(False)
    ftr.AddChild(fBtn)

    def remove_selected():
        table.GetSelectedRows(lambda x: table.RemoveRows(x))

    fBtn.SetOnTouch(remove_selected)

    def on_selection_status(c):
        if c:
            fBtn.SetEnabled(True)
        else:
            fBtn.SetEnabled(False)

    table.SetOnSelectionStatus(on_selection_status)

    app.AddLayout(lay)
 */
