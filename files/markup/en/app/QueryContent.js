// ------------- HEADER SECTION -------------


/** # QueryContent #
 * @brief Queries content from the android content model
 *
 * $$ app.QueryContent(uri, columns, select?, args?, sort?) $$
 * @param {str_uri} uri
 * @param {str_com} columns
 * @param {str_sql} [select]
 * @param {str_lst} [args]
 * @param {str} [sort] coloumn:a coloumn specified in 'coloumns'
 * @returns lst-[any]
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Queries content from the android content model. The **uri** typically have the syntax “content://authority/path/id”. You can find more infos about it on the [Android Developer page](https://developer.android.com/reference/android/content/ContentUris).

The **coloumns** are specific for the database you are accessing. You can get this information from the respective content provider.

**select** is a optional sql command to filter the results.

**args** is an optional parameter for arguments you want to include to the sql command. The placeholder for these arguments are '?' signs in the sql command.

<premium>
 */



// ------------- SAMPLES -------------



/**
@sample Show Contacts
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	lst = app.CreateList( "", 1, 1 );
	lay.AddChild( lst );
	app.AddLayout( lay );

    var uri = "content://com.android.contacts/data";
    var columns = "display_name,data1";
    var select = "mimetype='vnd.android.cursor.item/phone_v2'";
    var rows = app.QueryContent( uri, columns, select, null, "display_name" );

    var list = [];
    for(var i in rows)
        list.push( rows[i].display_name + ":" + rows[i].data1 + ": " );

    lst.SetList( list );
}
 */



/**
@sample Python Show Contacts
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lst = app.CreateList("", 1, 1)
    lay.AddChild(lst)
    app.AddLayout(lay)

    uri = "content://com.android.contacts/data"
    columns = "display_name,data1"
    select = "mimetype='vnd.android.cursor.item/phone_v2'"
    rows = app.QueryContent(uri, columns, select, None, "display_name")

    contact_list = []
    for row in rows:
        contact_list.append(row.display_name + ":" + row.data1 + ": ")

    lst.SetList(contact_list)
 */
