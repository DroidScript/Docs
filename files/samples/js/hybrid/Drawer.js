

//Main class for the app
class Main extends App 
{
    //Called when app starts.
    onStart()
    {
        //Add the main layout.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
    
        //Add a title bar.
        this.bar = ui.addAppBar( this.layMain, "My App", "menu", 1 )
        this.bar.setOnMenu( () => { this.drawer.show() } )
    
        //Create a drawer layout.
        this.layDrawer = ui.addLayout( null, "Linear" )
    
        //Add an icon list to the drawer layout.
        var menus1 = [ ["home","Home"], ["movie", "Video"] ]
        this.lstMenu1 = ui.addList( this.layDrawer, menus1, "icon", 1 )
        this.lstMenu1.setOnTouch( this.lstMenu_OnTouch )
    
        //Add a divider to the drawer layout.
        this.div = ui.addDivider( this.layDrawer, 1 )
    
        //Add another icon list to the drawer layout.
        var menus2 = [["mail", "All Mail"], ["inbox", "Inbox"]]
        this.lstMenu2 = ui.addList( this.layDrawer, menus2, "icon", 1 )
        this.lstMenu2.setOnTouch( this.lstMenu_OnTouch )
    
        //Create the drawer.
        var drawerWidth = platform.mobile ? 0.6 : 0.2
        this.drawer = ui.addDrawer( this.layDrawer, "left", drawerWidth )
        this.drawer.setOnClose( ()=>{ console.log("onClose") } )
    }

    //Handle list item selection.
    lstMenu_OnTouch( title, body, icon, index )
    {
        console.log( title )
        this.drawer.hide()
    }
}
