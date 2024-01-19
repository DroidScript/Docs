// ------------- HEADER SECTION -------------


/** # addDrawer #
 * @abbrev drw
 * @brief addDrawer
 * Adds a drawer into your app.
 * $$ drw = ui.addDrawer(lay, options?) $$
 * @param {obj} lay The drawer layout.
 * @param {str_com} [options]
 * @returns uio-Drawer
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### anchor
 * @prop
 * Sets or returns the anchor position of the drawer. Values can be <col nobox #fb8c00>left</col>, <col nobox #fb8c00>top</col>, <col nobox #fb8c00>right</col>, <col nobox #fb8c00>bottom</col>.
 * @returns str
 */


/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the drawer.
 * @returns bin
 */


/** ### swipeAreaWidth
 * @prop
 * Sets or returns the width of the swipeable area of the Drawer.
 * @returns num
 */


/** ### width
 * @prop
 * Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position <col nobox #fb8c00>[0-1]</col>.
 * @returns num
 */


/** ### addLayout ###
 * @brief addLayout
 * Adds a layout into the drawer
 * $$ drw.addLayout(lay) $$
 * @param {obj} lay Layout component.
 */


/** ### disableSwipeToOpen ###
 * @brief disableSwipeToOpen
 * Disable swipe to open feature of the drawer. You can use this especially for ios devices which has swipe to go back feature
 * $$ drw.disableSwipeToOpen(value) $$
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### disableBackdropTransition ###
 * @brief disableBackdropTransition
 * Disable the backdrop transition. This can improve the FPS on low-end devices
 * $$ drw.disableBackdropTransition(value) $$
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### disableDiscovery ###
 * @brief disableDiscovery
 * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture
 * $$ drw.disableDiscovery(value) $$
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### setOnOpen ###
 * @brief setOnOpen
 * Adds a callback function when the drawer is opened
 * $$ drw.setOnOpen(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function when the drawer is closed
 * $$ drw.setOnClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### show ###
 * @brief show
 * Open the drawer dynamically
 * $$ drw.show(anchor) $$
 * @param {str} [anchor='left'] Open position. Can be `left` or `right`.
 */


/** ### hide ###
 * @brief hide
 * Close the drawer dynamically
 * $$ drw.hide() $$
 */



// ------------- SAMPLES -------------



/**
@sample Drawer Implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Add a fixed appbar with menu icon to the main layout.
        this.apb = ui.addAppBar(this.main, "My App", "Menu,Fixed")

        // Add a callback handler for `onMenu` event of the AppBar control.
        this.apb.setOnMenu( this.openDrawer )

        // Add a text control to the main layout.
        ui.addText(this.main, "<---- Swipe left ----->", "Center");

        // Create a linear layout for the drawer.
        this.drawerLay = ui.addLayout(null, "Linear")

        // Initialize the drawer by passing the drawer layout above.
        this.drawer = ui.addDrawer(this.drawerLay, "left", 0.7)

        // Add a callback handler for `onClose` event on the Drawer component.
        this.drawer.setOnClose( this.onClose )

        var lst1 = [
            [ "music_note", "Audios" ],
            [ "movie", "Videos" ],
            [ "insert_drive_file", "Documents" ]
        ]

        // Adds a list to the drawer layout. See List control for customization.
        this.lstMenu1 = ui.addList( this.drawerLay, lst1, "Icon", 1 )
        this.lstMenu1.label = "Main navigation"

        // Add a callback handler for `onSelect` event on the list.
        this.lstMenu1.setOnTouch( this.onSelect )

        // Adds a divider into the drawer layout.
        ui.addDivider( this.drawerLay, 1 )

        var lst2 = [
            [ "mail", "All Mail" ],
            [ "inbox", "Inbox" ],
            [ "drafts", "Outbox" ],
            [ "send", "Sent" ]
        ]

        // Adds another list to the drawer layout. See List control for customization.
        this.lstMenu2 = ui.addList( this.drawerLay, lst2, "Icon", 1 )
        this.lstMenu2.label = "Secondary navigation"
        this.lstMenu2.setOnTouch( this.onSelect )
    }

    openDrawer()
    {
        this.drawer.show()
    }

    onSelect(title)
    {
        this.apb.text = title
        ui.showPopup( title )
        this.drawer.hide()
    }

    onClose()
    {
        ui.showPopup('Drawer is close', "bottom")
    }
}
 */



/**
@sample Drawer Anchor Positions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Adds a select control to the main layout.
        this.sel = ui.addSelect(this.main, ["Left", "Top", "Right", "Bottom"], "Radio,Outlined", 0.7)
        this.sel.label = "Select anchor position"

        // Add a callback handler for `onChange` event of the select control.
        this.sel.setOnChange(this.onSelect)

        // Creates a linear layout for the drawer.
        this.drawerLay = ui.addLayout( null, "Linear" )

        // Initialize the drawer by passing the drawer layout.
        this.drawer = ui.addDrawer( this.drawerLay, "left" )

        var lst1 = [
            [ "music_note", "Audios" ],
            [ "movie", "Videos" ],
            [ "insert_drive_file", "Documents" ]
        ]

        // Adds a list to the drawer layout.
        this.lstMenu1 = ui.addList( this.drawerLay, lst1, "Icon", 1 )
        this.lstMenu1.setOnTouch( this.closeDrawer )
        this.lstMenu1.label = "Main navigation"

        // Adds a divider into the drawer layout.
        ui.addDivider( this.drawerLay, 1 )

        var lst2 = [
            [ "mail", "All Mail" ],
            [ "inbox", "Inbox" ],
            [ "drafts", "Outbox" ],
            [ "send", "Sent" ]
        ]

        // Adds another list to the drawer layout.
        this.lstMenu2 = ui.addList( this.drawerLay, lst2, "Icon", 1 )
        this.lstMenu2.label = "Secondary navigation"
        this.lstMenu2.setOnTouch( this.closeDrawer )
    }

    openDrawer()
    {
        this.drawer.show()
    }

    closeDrawer( title )
    {
        ui.showPopup( title )
        this.drawer.hide()
    }

    onSelect( value )
    {
        // Set the drawer anchor first
        this.drawer.anchor = value

        // Set the drawer width depending on anchor position
        if(value == "Top" || value == "Bottom") {
            this.drawer.width = 0.5
        } else {
            this.drawer.width = 0.7
        }
        
        // Open the drawer
        this.drawer.show()
    }
}
 */



/**
@sample Python Drawer Implementation
from hybrid import ui

def OnStart():
            main = ui.addLayout("main", "Linear", "VCenter,FillXY")

            apb = ui.addAppBar(main, "My App", "Menu,Fixed")
            apb.setOnMenu(openDrawer)

            ui.addText(main, "<---- Swipe left ----->", "Center")

            drawerLay = ui.addLayout(None, "Linear")
            drawer = ui.addDrawer(drawerLay, "left", 0.7)
            drawer.setOnClose(onClose)

            lst1 = [
                ["music_note", "Audios"],
                ["movie", "Videos"],
                ["insert_drive_file", "Documents"]
            ]
            lstMenu1 = ui.addList(drawerLay, lst1, "Icon", 1)
            lstMenu1.label = "Main navigation"
            lstMenu1.setOnTouch(onSelect)

            ui.addDivider(drawerLay, 1)

            lst2 = [
                ["mail", "All Mail"],
                ["inbox", "Inbox"],
                ["drafts", "Outbox"],
                ["send", "Sent"]
            ]
            lstMenu2 = ui.addList(drawerLay, lst2, "Icon", 1)
            lstMenu2.label = "Secondary navigation"
            lstMenu2.setOnTouch(onSelect)

        def openDrawer():
            drawer.show()

        def onSelect(
 */
