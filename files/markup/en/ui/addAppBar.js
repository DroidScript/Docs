// ------------- HEADER SECTION -------------


/** # addAppBar #
 * @abbrev apb
 * @brief addAppBar
 * 
 * $$ apb = ui.addAppBar(parent, title, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the AppBar
 * @param {str} title The title text of the appbar
 * @param {str_com} options one or a combination of the following: \n `Menu` : Adds a menu icon on the left \n `Primary` `Secondary` `Transparent` `Inherit` `Default` : Adds a color \n `Absolute` `Static` `Fixed` `Relative` : Adds a positioning
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns uio-AppBar
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an AppBar on your app.

### Properties
These are the setter and getter properties for the addAppBar Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the AppBar. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col> <col nobox #fb8c00>Transparent</col> <col nobox #fb8c00>Inherit</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius of the accordion panel. You can also pass an array of the form <col nobox #fb8c00>[tl, tr, bl, br]</col>. See <col nobox #fb8c00>setCornerRadius</col> for customization.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>icon:"str:'Sets or returns the icon of the menu button.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>layout:"Layout:'Returns the right layout of the appbar where you can add controls.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>menu:"bin:'Sets or returns whether the appbar has menu button.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>text:"str:'Sets or return the AppBar title text'"</smp>
<smp noinl>textColor:"str:'Sets or returns the hexadecimal color of the appbar title.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the font size of the title text.'"</smp>
<smp noinl>textVariant:"str:'Sets or returns the variant of the title text. Values can be <col nobox #fb8c00>h1</col> <col nobox #fb8c00>h2</col> <col nobox #fb8c00>h3</col> <col nobox #fb8c00>h4</col> <col nobox #fb8c00>h5</col> or <col nobox #fb8c00>h6</col>'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnMenu ###
 * @brief setOnMenu
 * Sets a function to be called when the user clicks the menu
 * $$ apb.setOnMenu(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### addLayout ###
 * @brief addLayout
 * Adds a layout for additional controls at the right of the appbar
 * $$ apb.addLayout(lay) $$
 * @param {obj} lay The layout where to add controls
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the appbar
 * $$ apb.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** @extern setOnTouch */

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

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES ------------- 


    
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
        this.drawer = ui.addDrawer(this.drawLay, "left")

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
        this.drawer = ui.addDrawer(this.drawLay, "left")

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
        this.main = ui.addLayout( "main", "Linear", "Top", 1, 1 )

        // Add an appbar to the main layout
        this.apb = ui.addAppBar( this.main, "My app", "Default" )
    
        // Adds a textfield to the appbar
        this.tfd = ui.addTextField(this.apb.layout, "", "Search,Outlined,Small")
        this.tfd.placeholder = "Search"
        this.tfd.hide()

        // Add a search icon button to the appbar
        this.searchBtn = ui.addButton(this.apb.layout, "search", "icon")

        // Add a callback handler when the button is click
        this.searchBtn.setOnTouch( this.showSearchField )
    }

    showSearchField()
    {
        if(this.searchBtn.text == "search")
        {
            this.tfd.show()
            this.searchBtn.text = "close"
        }
        else
        {
            this.tfd.hide()
            this.searchBtn.text = "search"
        }
    }
}
 */
    
            
    
/**
@sample Python Basic AppBar
from hybrid import ui

def OnStart():
    # Creates a fullscreen linear layout with objects align Top and Center
    main = ui.addLayout("main", "Linear", "Top,Center", 1, 1)

    # Adds an appbar to the layout
    apb = ui.addAppBar(main, "My App", "", 1)

    # Adds a button control with margins 1/10 of the parent width.
    btn = ui.addButton(main, "Button")
    btn.margins = 0.1
 */
    
            
    
/**
@sample Python Fixed appbar with drawer
from hybrid import ui

def OnStart():
    global drawer, apb
    # Creates a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add an appbar to the layout
    apb = ui.addAppBar(main, "My app", "Menu,Fixed", 1)

    # Add a callback handler to show the drawer onMenu event
    apb.setOnMenu( showDrawer )

    # Add a drawer layout
    drawLay = ui.addLayout(None, "Linear", "Top")

    # Add a drawer to the app and pass the drawer layout
    drawer = ui.addDrawer(drawLay, "left")

    # Add a list to the drawer layout. See `List` component for customization.
    lst = [
        ["folder", "Folders"],
        ["music_note", "Audios"],
        ["photo", "Photos"]
    ]
    lstMenu = ui.addList(drawLay, lst, "Icon", 1 )
    lstMenu.label = "Main navigation"

    # Add a callback handler to the list onTouch event
    lstMenu.setOnTouch( onTouch )

def showDrawer():
    drawer.show()

def onTouch(title, body, icon, index, event):
    # Set the appbar text with the selected list item
    apb.text = title

    # Close the drawer
    drawer.hide()
 */
    
            
    
/**
@sample Python Appbar with actions
from hybrid import ui

def OnStart():
    global drawer, apb
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "Top,Center", 1, 1)

    apb = ui.addAppBar(main, "My App", "Menu,Primary")
    apb.setOnMenu( showDrawer )

    # Add an icon buttons to the appbar with onTouch callbacks
    btn1 = ui.addButton(apb.layout, "mail", "icon")
    btn1.setOnTouch(lambda event: ui.showPopup("Messages", "Bottom"))

    btn2 = ui.addButton(apb.layout, "person", "icon")
    btn2.setOnTouch(lambda event: ui.showPopup("Account", "Bottom"))

    btn3 = ui.addButton(apb.layout, "more_vert", "icon")
    btn3.setOnTouch(lambda event: ui.showPopup("More options", "Bottom"))

    # Adds a drawer layout
    drawLay = ui.addLayout(None, "Linear", "Top")

    # Adds a drawer to the app and pass the drawer layout
    drawer = ui.addDrawer(drawLay, "left")

    # Adds a list to the drawer layout. See `List` component for customization.
    lst = [
        ["folder", "Folders"],
        ["music_note", "Audios"],
        ["photo", "Photos"]
    ]
    lstMenu = ui.addList(drawLay, lst, "Icon", 1 )
    lstMenu.label = "Main navigation"

    # Add a callback handler to the list onTouch event
    lstMenu.setOnTouch( onTouch )

def showDrawer():
    drawer.show()

def onTouch(title, body, icon, index, event):
    # Set the appbar text with the selected list item
    apb.text = title

    # Close the drawer
    drawer.hide()
 */
    
            
    
/**
@sample Python Appbar with search field
from hybrid import ui

def OnStart():
    global tfd, searchBtn
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "Top", 1, 1)

    # Add an appbar to the main layout
    apb = ui.addAppBar(main, "My app", "Default")

    # Adds a textfield to the appbar
    tfd = ui.addTextField(apb.layout, "", "Search,Outlined,Small")
    tfd.placeholder = "Search"
    tfd.hide()

    # Add a search icon button to the appbar
    searchBtn = ui.addButton(apb.layout, "search", "icon")

    # Add a callback handler when the button is click
    searchBtn.setOnTouch( showSearchField )

def showSearchField(event):
    if searchBtn.text == "search":
        tfd.show()
        searchBtn.text = "close"
    else:
        tfd.hide()
        searchBtn.text = "search"
 */
    
            