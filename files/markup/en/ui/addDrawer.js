/** # Drawer
 * @abbrev drw
 * A drawer is a navigation panel that slides in from the edge of the screen, typically from the left, to reveal additional options or content.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, Drawers offer a consistent and organized way to access app navigation, settings, or other features, contributing to a seamless and intuitive user experience. Add a drawer into your app using the `addDrawer` method like this:
 * $$ drw = ui.addDrawer(lay, options) $$
 * @param {uio-Layout} layout The drawer layout where to add controls.
 * @param {String} [options] A comma separated options.nVariant: `Permanent`, `Persistent`, `Temporary`\nAnchor: `Left`, `Right`, `Top`, `Bottom`
 * @param {Number} [width] Fraction of the screen width starting from the anchor position `[0-1]`.
 * @returns uio-Drawer
 */


	/** ## Properties ##
	 * Here are the available setter and getter properties of the Drawer Component.
     * @prop {Boolean} disabled Sets or returns the `disabled` state of the drawer.
     * @prop {Number} width Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position `[0-1]`.
     * @prop {String} anchor Sets or returns the anchor position of the drawer. Values can be `left`, `top`, `right`, `bottom`.
     * @prop {Number} swipeAreaWidth Sets or returns the width of the swipeable area of the Drawer.
	 */


	/** ## Methods ##
	 * Here are the available methods of the Drawer Component.
	 */


    /** ### addLayout
	 * Adds a layout into the drawer.
	 * @param {Object} lay Layout component.
	 */


	/** ### disableSwipeToOpen ###
	 * Disable swipe to open feature of the drawer. You can use this especially for ios devices which has swipe to go back feature.
	 * $$ drw.disableSwipeToOpen( value ) $$
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


	/** ### disableBackdropTransition ###
	 * Disable the backdrop transition. This can improve the FPS on low-end devices.
	 * $$ drw.disableBackdropTransition( value ) $$
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


	/** ### disableDiscovery ###
	 * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture.
	 * $$ drw.disableDiscovery( value ) $$
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


	/** ### setOnOpen ###
	 * Adds a callback function when the drawer is opened via swiping from the anchor position.
	 * $$ drw.setOnOpen(callback) $$
	 * @param {Function} callback The callback function.
	 */


	/** ### setOnClose ###
	 * Adds a callback function when the drawer is closed.
	 * $$ drw.setOnClose(callback) $$
	 * @param {Function} callback The callback function.
	 */


	/** ### show ###
	 * Open the drawer dynamically.
	 * $$ drw.show( anchor ) $$
	 * @param {String} [anchor='left'] Optional. The anchor position. Can be `left`, `top`, `right`, `bottom`. Default is `left`.
	 */


	/** ### hide ###
	 * Close the drawer dynamically.
	 * $$ drw.hide() $$
	 */


/* --- parent_methods here ----- */


/* ## Examples ## */


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

        def onSelect( title ):
            ui.showPopup( title )
 */


/**
@sample Python Drawer Anchor Positions
from hybrid import ui

def onStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Adds a select control to the main layout.
    sel = ui.addSelect(main, ["Left", "Top", "Right", "Bottom"], "Radio,Outlined", 0.7)
    sel.label = "Select anchor position"

    # Add a callback handler for `onChange` event of the select control.
    sel.setOnChange(onSelect)

    # Creates a linear layout for the drawer.
    drawerLay = ui.addLayout(None, "Linear")

    # Initialize the drawer by passing the drawer layout.
    drawer = ui.addDrawer(drawerLay, "left")

    lst1 = [
        ["music_note", "Audios"],
        ["movie", "Videos"],
        ["insert_drive_file", "Documents"]
    ]

    # Adds a list to the drawer layout.
    lstMenu1 = ui.addList(drawerLay, lst1, "Icon", 1)
    lstMenu1.setOnTouch(closeDrawer)
    lstMenu1.label = "Main navigation"

    # Adds a divider into the drawer layout.
    ui.addDivider(drawerLay, 1)

    lst2 = [
        ["mail", "All Mail"],
        ["inbox", "Inbox"],
        ["drafts", "Outbox"],
        ["send", "Sent"]
    ]

    # Adds another list to the drawer layout.
    lstMenu2 = ui.addList(drawerLay, lst2, "Icon", 1)
    lstMenu2.label = "Secondary navigation"
    lstMenu2.setOnTouch(closeDrawer)

def openDrawer():
    drawer.show()

def closeDrawer(, title):
    ui.showPopup(title)
    drawer.hide()

def onSelect(, value):
    # Set the drawer anchor first
    drawer.anchor = value

    # Set the drawer width depending on anchor position
    if value == "Top" or value == "Bottom":
        drawer.width = 0.5
    else:
        drawer.width = 0.7

    # Open the drawer
    drawer.show()
 */


