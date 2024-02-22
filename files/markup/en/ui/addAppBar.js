/** # AppBar
 * @abbrev apb
 * @ds Adds an appbar to your app.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In UI development, an AppBar is a common user interface element found at the top of the screen in mobile applications. It typically contains the app's title, navigation icons, and other actions. In Material Design, an AppBar follows guidelines such as elevation, color, and typography for consistency. Add an AppBar into your app using the `addAppBar` method like this:
 * $$ apb = ui.addAppBar(parent, title, options, width, height) $$
 * @param {Object} parent The parent layout where to add the AppBar
 * @param {String} title The title text of the appbar
 * @param {String} options A comma separated options.\nMenu icon: `Menu` \nTheme Color: `Primary`, `Secondary`, `Transparent`, `Inherit`, `Default`\nPosition: `Absolute`, `Static`, `Fixed`, `Relative`
 * @param {Number} width Fraction of the parent width `[0-1]`
 * @param {Number} height Fraction of the parent height `[0-1]`
 * @returns {Object} AppBar
 */


/** ## Properties
 * Here are the available setters and getters of the AppBar Component.
 * @prop {String} text Sets or return the AppBar title text
 * @prop {String} color Sets or returns the theme color of the AppBar. Values can be `Default` `Primary` `Secondary` `Transparent` `Inherit`
 * @prop {String} textColor Sets or returns the hexadecimal color of the appbar title.
 * @prop {String} textVariant Sets or returns the variant of the title text. Values can be `h1` `h2` `h3` `h4` `h5` or `h6`
 * @prop {Number} textSize Sets or returns the font size of the title text.
 * @prop {String} icon Sets or returns the icon of the menu button.
 * @prop {Object} layout Returns the right layout of the appbar where you can add controls.
 * @prop {Boolean} menu Sets or returns whether the appbar has menu button.
 * @prop {Number} cornerRadius Sets or returns the corner radius of the accordion panel. You can also pass an array of the form `[tl, tr, bl, br]`. See `setCornerRadius` for customization.
 */


/** @extern width */
/** @extern height */
/** @extern opacity */
/** @extern textSize */
/** @extern textColor */
/** @extern rotation */
/** @extern fontFile */
/** @extern visibility */
/** @extern type */
/** @extern absWidth */
/** @extern absHeight */
/** @extern backColor */
/** @extern backImage */
/** @extern isVisible */
/** @extern top */
/** @extern left */
/** @extern absTop */
/** @extern absLeft */
/** @extern parent */
/** @extern position */
/** @extern margins */
/** @extern padding */
/** @extern options */
/** @extern disabled */
/** @extern border */
/** @extern borderColor */
/** @extern borderStyle */
/** @extern cornerRadius */
/** @extern el */
/** @extern elStyle */

// VISIBLE METHODS

/** ## Methods
 * Here are the methods available for AppBar Component.
 */


/** @extern setOnContextMenu */
/** @extern animate */
/** @extern setSize */
/** @extern show */
/** @extern hide */
/** @extern gone */
/** @extern destroy */
/** @extern setScale */
/** @extern getPosition */
/** @extern setMargins */
/** @extern setPadding */
/** @extern setPosition */
/** @extern setBorder */
/** @extern setCornerRadius */
/** @extern bringForward */
/** @extern sendBackward */

/** ### setOnTouch
 * Adds a callback handler when the component is touch.
 * $$ apb.setOnTouch( callback ) $$
 * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
 */


/** ### setOnMenu
 * Sets a function to be called when the user clicks the menu.
 * $$ apb.setOnMenu( callback ) $$
 * @param {Function} callback The function to be called. ---> @arg {Object} pos The position of the touch event.
 */


/** ### addLayout
 * Adds a layout for additional controls at the right of the appbar.
 * $$ apb.addLayout( lay ) $$
 * @param {Object} lay The layout where to add controls
 */


/** ### setCornerRadius
 * Sets the corner radius of the appbar.
 * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {Number} tl Top-left corner radius.
 * @param {Number} tr Top-right corner radius.
 * @param {Number} bl Bottom-left corner radius.
 * @param {Number} br Bottom-right corner radius.
 * @param {String} mode Unit. Values are `px` `rem` or `%`.
 */


/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic AppBar
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen linear layout with objects align Top and Center
        this.main = ui.addLayout("main", "Linear", "Top,Center", 1, 1)

        // Adds an appbar to the layout
        this.apb = ui.addAppBar(this.main, "My App", "", 1)

        // Adds a button control with margins 1/10 of the parent width.
        this.btn = ui.addButton(this.main, "Button")
        this.btn.margins = 0.1
    }
}
 */


/**
@sample Fixed appbar with drawer
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add an appbar to the layout
        this.apb = ui.addAppBar(this.main, "My app", "Menu,Fixed", 1)

        // Add a callback handler to show the drawer onMenu event
        this.apb.setOnMenu( this.showDrawer )

        // Add a drawer layout
        this.drawLay = ui.addLayout(null, "Linear", "Top")

        // Add a drawer to the app and pass the drawer layout
        this.drawer = ui.addDrawer(this.drawLay, "left", 0.7)

        // Add a list to the drawer layout. See `List` component for customization.
        let lst = [
            ["folder", "Folders"],
            ["music_note", "Audios"],
            ["photo", "Photos"]
        ]
        this.lstMenu = ui.addList(this.drawLay, lst, "Icon", 1 )
        this.lstMenu.label = "Main navigation"

        // Add a callback handler to the list onTouch event
        this.lstMenu.setOnTouch( this.onTouch )
    }

    showDrawer()
    {
        this.drawer.show()
    }

    onTouch( title )
    {
        // Set the appbar text with the selected list item
        this.apb.text = title

        // Close the drawer
        this.drawer.hide()
    }
}
 */


/**
@sample Appbar with actions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "Top,Center", 1, 1)

        this.apb = ui.addAppBar(this.main, "My App", "Menu,Primary")
        this.apb.setOnMenu( this.showDrawer )
    
        // Add an icon buttons to the appbar with onTouch callbacks
        this.btn1 = ui.addButton(this.apb.layout, "mail", "icon")
        this.btn1.setOnTouch(() => { ui.showPopup("Messages", "Bottom") })

        this.btn2 = ui.addButton(this.apb.layout, "person", "icon")
        this.btn2.setOnTouch(() => { ui.showPopup("Account", "Bottom") })

        this.btn3 = ui.addButton(this.apb.layout, "more_vert", "icon")
        this.btn3.setOnTouch(() => { ui.showPopup("More options", "Bottom") })
    
        // Adds a drawer layout
        this.drawLay = ui.addLayout(null, "Linear", "Top")

        // Adds a drawer to the app and pass the drawer layout
        this.drawer = ui.addDrawer(this.drawLay, "left", 0.7)

        // Adds a list to the drawer layout. See `List` component for customization.
        let lst = [
            ["folder", "Folders"],
            ["music_note", "Audios"],
            ["photo", "Photos"]
        ]
        this.lstMenu = ui.addList(this.drawLay, lst, "Icon", 1 )
        this.lstMenu.label = "Main navigation"

        // Add a callback handler to the list onTouch event
        this.lstMenu.setOnTouch( this.onTouch )
    }

    showDrawer()
    {
        this.drawer.show()
    }

    onTouch( title )
    {
        // Set the appbar text with the selected list item
        this.apb.text = title

        // Close the drawer
        this.drawer.hide()
    }
}
 */


/**
@sample Appbar with search field
class Main extends App
{
   onStart()
   {
       // Creates a fullscreen layout with objects vertically centered.
       this.main = ui.addLayout("main", "Linear", "Top,FillXY")

       // Add an appbar to the main layout with menu icon
       this.apb = ui.addAppBar(this.main, "My app", "Default,Menu")

       // Add a callback handler when the menu icon is click
             this.apb.setOnMenu( this.onMenu )
       
       // Adds a textfield to the appbar
       this.tfd = ui.addTextField(this.apb.layout, "", "Search,Small", 0.9)
       this.tfd.placeholder = "Search"
       this.tfd.hide()

       // Add a search icon button to the appbar
       this.searchBtn = ui.addButton(this.apb.layout, "search", "icon")

       // Add a callback handler when the search button is click
       this.searchBtn.setOnTouch( this.showSearchField )
   }
    
    onMenu()
    {
        // Close the textfield if it is shown
        if( this.show )
        {
            this.closeSearchField()
        }
    }

    showSearchField()
    {
        // Display textfield if not shown
        if( !this.show )
        {
            this.tfd.show()
            this.apb.text = ""
            this.apb.icon = "arrow_back"
            this.show = true;
        }
        else
        {
            ui.showPopup("Search for "+this.tfd.text)
        }
    }
    
    closeSearchField()
    {
        this.tfd.hide()
        this.apb.text = "My app"
        this.apb.icon = "menu"
        this.show = false
    }
}
 */
