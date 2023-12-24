
//Make this a Hybrid app.
cfg.Hybrid

//Called when application starts.
function OnStart()
{
    //Add the main layout.
    layMain = ui.addLayout( "main", "linear", "fillxy" )

    //Add a title bar.
    bar = ui.addAppBar( layMain, "My App", "menu", 1 )
    bar.setOnMenu( () => { drawer.show() } )

    //Create a drawer layout.
    layDrawer = ui.addLayout( null, "Linear", "VCenter", 1 )

    //Add an icon list to the drawer layout.
    var menus1 = [["music_note", "Audio"], ["movie", "Video"]]
    lstMenu1 = ui.addList( layDrawer, menus1, "icon", 1 )
    lstMenu1.setOnTouch( lstMenu_OnTouch )

    //Add a divider to the drawer layout.
    div = ui.addDivider( layDrawer, "", 1 )

    //Add another icon list to the drawer layout.
    var menus2 = [["mail", "All Mail"], ["inbox", "Inbox"]]
    lstMenu2 = ui.addList( layDrawer, menus2, "icon", 1 )
    lstMenu2.setOnTouch( lstMenu_OnTouch )

    //Create the drawer.
    drawerWidth = platform.mobile ? 0.6 : 0.2
    drawer = ui.createDrawer( layDrawer, "left", drawerWidth )
    drawer.setOnClose( ()=>{ console.log("onClose") } )
}

//Handle list item selection.
function lstMenu_OnTouch( title, body, icon, index )
{
    console.log( title )
    drawer.hide()
}
