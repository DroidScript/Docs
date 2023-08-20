// ------------- HEADER SECTION ------------- 


/** # addDrawer #
 * @abbrev drw
 * @brief addDrawer
 * 
 * $$ drw = ui.addDrawer(lay, options) $$ 
 * @param {obj} lay The drawer layout.
 * @param {str} options A comma separated options.
 * @returns obj-Drawer Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a drawer into your app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addDrawer Component.
<div class="samp"><a href="#anchor-0" data-transition="pop" data-rel="popup" class="ui-link">anchor </a></div><div class="samp"><a href="#disabled-5" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#swipeareawidth-10" data-transition="pop" data-rel="popup" class="ui-link">swipeAreaWidth </a></div><div class="samp"><a href="#width-15" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="anchor-0" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the anchor position of the drawer. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span>.</p></div><div data-role="popup" id="disabled-5" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the drawer.</p></div><div data-role="popup" id="swipeareawidth-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the swipeable area of the Drawer.</p></div><div data-role="popup" id="width-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[0-1]</span>.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### addLayout ###
 * @brief addLayout
 * Adds a layout into the drawer *  * 
 * $$ drw.addLayout(lay) $$
 * @param {obj} lay Layout component.
 */


/** ### disableSwipeToOpen ###
 * @brief disableSwipeToOpen
 * Disable swipe to open feature of the drawer. You can use this especially for ios devices which has swipe to go back feature *  * 
 * $$ drw.disableSwipeToOpen(value) $$
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### disableBackdropTransition ###
 * @brief disableBackdropTransition
 * Disable the backdrop transition. This can improve the FPS on low-end devices *  * 
 * $$ drw.disableBackdropTransition(value) $$
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### disableDiscovery ###
 * @brief disableDiscovery
 * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture *  * 
 * $$ drw.disableDiscovery(value) $$
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### setOnOpen ###
 * @brief setOnOpen
 * Adds a callback function when the drawer is opened *  * 
 * $$ drw.setOnOpen(callback) $$
 * @param {} callback 
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function when the drawer is closed *  * 
 * $$ drw.setOnClose(callback) $$
 * @param {} callback 
 */


/** ### show ###
 * @brief show
 * Open the drawer dynamically *  * 
 * $$ drw.show(anchor) $$
 * @param {str} anchor Open position. Can be `left` or `right`. Default is `left`
 */


/** ### hide ###
 * @brief hide
 * Close the drawer dynamically *  * 
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
    
            