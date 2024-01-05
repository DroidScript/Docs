// ------------- HEADER SECTION -------------


/** # SetMenu #
 * @brief Set app menu
 * Set the app menu fields. When a menu entry is touched, the global _OnMenu_ event will be called.
 * 
 * See Also: @ShowMenu
 * $$ app.SetMenu(list, iconPath) $$ 
 * @param {str_com} list 
 * @param {str_ptf} iconPath 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	<b>app.SetMenu( "Start,Stop,Pause" );</b>

    lay = app.CreateLayout( "linear", "" );

    btn = app.CreateButton( "[fa-gear]", -1, -1, "fontawesome" );
    btn.SetOnTouch( app.ShowMenu );
    lay.AddChild( btn );

    app.AddLayout( lay );
}

function OnMenu( item )
{
	app.ShowPopup( item, "Short" );
}
 */
    
            
    
/**
@sample Menu Icons
function OnStart()
{
    <b>menus = "Files:folder,Music:list,Images:picture";
	app.SetMenu( menus );</b>
    app.ShowMenu();
}

function OnMenu( item )
{
    app.ShowPopup( item, "Short" );
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    app.SetMenu("Start,Stop,Pause")

    lay = app.CreateLayout("linear", "")

    btn = app.CreateButton("[fa-gear]", -1, -1, "fontawesome")
    btn.SetOnTouch(app.ShowMenu)
    lay.AddChild(btn)

    app.AddLayout(lay)

def OnMenu(item):
    app.ShowPopup(item, "Short")
 */
    
            
    
/**
@sample Python Menu Icons
from native import app

def OnStart():
    menus = "Files:folder,Music:list,Images:picture"
    app.SetMenu(menus)
    app.ShowMenu()

def OnMenu(item):
    app.ShowPopup(item, "Short")
 */
    
            