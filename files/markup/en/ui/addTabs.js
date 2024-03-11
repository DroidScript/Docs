/** # Tabs
 * @abbrev tab
 * Tabs in user interfaces facilitate seamless navigation between app sections.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Positioned in the AppBar, they offer labeled or icon-based selection, enabling users to switch content effortlessly. Consistent styling and clear hierarchy enhances the overall user experience, ensuring intuitive navigation within the application. Add a tabs into your app using the `addTabs` method like this:
 * $$ tab = ui.addTabs(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the Tabs Component.
 * @param {Array} [list] An array of tab names.
 * @param {String} [options] A comma separated options.\nSwipe: `Swipeable`\nTheme Colors: `Primary`, `Secondary`, `Inherit`, `Transparent`, `Default`\nVariant: `Standard`, `Scrollable`, `FullWidth`\nLayout: `Linear`, `Absolute`\nUtils: `Icon`, `Center`, `Paper`
 * @param {Number} [width] Fraction of the parent width `[0-1]`
 * @param {Number} [height] Fraction of the parent height `[0-1]`
 * @returns uio-Tabs
 */


/**
 * Default Tab variant for mobile screens is `fullWidth` unless provided.
 */


	/* Invisible methods */


	/** ## Properties
	 * Here are the available setter and getter properties of the Tabs Component.
	 * @prop {String} color Sets or returns the theme color of the tab bar. Values can be `Default` `Primary` or `Secondary`
	 * @prop {String} textColor Sets or returns the theme color for the tab bar titles `Primary` or `Secondary`. You can also pass a hexadecimal color of the form `#rrggbb`
	 * @prop {String} variant Sets or returns the variant of the Tabs Component. Values can be `Standard` `Scrollable` or `FullWidth`
	 * @prop {Boolean} centered Sets or returns a boolean value whether the tabs are centered or not.
     * @prop {Number} iconSize Sets or returns the tab icon.
     * @prop {String} iconColor Sets or returns the color ofthe tab icon.
     * @prop {Number} elevation Sets or returns the elevation of the tab bar. Make sure to pass a `Paper` option for this to work.
     * @prop {String} scrollButtonMode Sets or returns the scroll button mode when tab items overflow the width of its container. Values are `auto` `desktop` `on` and `of`.
     * @prop {Number} indicatorWidth Sets or returns the width of the indicator bar as a fraction of the tab item width. Works only on `FullWidth` tab.
     * @prop {Number} indicatorThickness Sets or returns the thickness of the indicator bar in pixels.
     * @prop {Number} indicatorRadius Sets or returns the corner radius of the indicator bar in pixels.
     * @prop {String} indicatorColor Sets or returns the color of the indicator bar. You can pass theme color `primary` or `secondary` or in hexadecimal format `#rrggbb`.
     * @prop {Number} tabPadding Sets or returns the padding of the tab items. The return objects has the following props: `left`, `top`, `right` and `bottom`. You can pass an object to set paddings on all side or see `setTabPadding` method.
     * @prop {Number} tabHeight Sets or returns the height of the tab in pixels.
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


	/** ## Methods
	 * Here are the available methods of the Tabs Component.
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


    /** ### setOnChange
	 * Sets a callback function when the value of the tab changes.
	 * $$ tab.setOnChange(callback) $$
	 * @param {Function} callback The callback function. ---> @arg {String} name The tab name. @arg {Number} index The index of the corresponding tab.
	 */


    /** ### setOnTouch
     * Add a callback function when a tab item i click.
     * $$ tab.setOnTouch( callback ) $$
     * @param {Function} callback The callback function. ---> @arg {String} name The tab name text. @arg {Number} index The tab item index. @arg {Object} pos The event position object.
     */


	/** ### setTabs
	 * Sets the tab titles array.
	 * $$ tab.setTabs( tabs ) $$
	 * @param {Array} tabs The tab titles array. See examples for format.
	 */


	/** ### addTab
	 * Add or insert a tab to the Tabs Component.
	 * $$ tab.addTab( name )
	 * @param {String} name The name of the tab.
	 * @param {String} icon Material icon font.
	 * @param {Number} index The index in which to insert the tab.
	 */


	/** ### setTitleText
	 * Sets a new title for the corresponding tab.
	 * $$ tab.setTitleText( index, title ) $$
	 * @param {Number} index Index of the tab.
	 * @param {String} title The new title.
	 */


    /** ### setIcon
     * Sets an icon to a corresponding tab title.
     * $$ tab.setIcon( index, icon ) $$
     * @param {Number} index The index of the tab.
     * @param {String} icon Material icon font.
     */


	/** ### removeTabByIndex
	 * Removes a tab item by its corresponding index.
	 * $$ tab.removeTabByIndex( index ) $$
	 * @param {Number} index The index of the corresponding tab to remove.
	 */


	/** ### removeTabByName
	 * Removes a tab item by its corresponding name.
	 * $$ tab.removeTabByName( name ) $$
	 * @param {String} name The name of the corresponding tab to remove.
	 */


    /** ### shiftItem
     * Removes the first item in the tabs list. This will return the item being removed.
     * $$ var firstTab = tab.shiftItem() $$
     * @returns Object
     */


    /** ### popItem
     * Removes the last item in the tabs list. This will return the item being removed.
     * $$ var lastTab = tab.popItem() $$
     * @returns Object
     */


	/** ### getLayout
	 * Returns the layout of the corresponding tab. You can then add components into the returned layout.
	 * $$ tab.getLayout( name ) $$
	 * @param {String} name The name of the tab. You can also pass the index of the tab.
	 * @returns Object Layout
	 */


	/** ### showTab
	 * Show a tab panel by its corresponding name. This will make the tab in active state.
	 * $$ tab.showTab( name ) $$
	 * @param {String} name The name of the tab to be shown.
	 */


	/** ### showTabByIndex
	 * Show a tab panel by its corresponding name. This will make the tab in active state.
	 * $$ tab.showTabByIndex( index ) $$
	 * @param {Number} index The index of the tab to be shown.
	 */


	/** ### setEnabled
	 * Enable or disable a tab item. Pass `index` as number if you want the corresponding tab index to be enabled or disabled.
	 * Pass `index` as Boolean, if you want to disable the entire Tabs component.
	 * $$ tab.setEnabled( index, value ) $$
	 * @param {Number} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of a tab.
     * $$ tab.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding tab.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable a tab by its name.
     * $$ tab.setEnabledByName( name, value ) $$
     * @param {String} name The name of the tab.
     * @param {Boolean} value Values can be `true` or `false`.
     */


    /** ### getEnabledByName
     * Get the enabled state of a tab by its name.
     * $$ tab.getEnabledByName( name ) $$
     * @param {String} name The name of the tab.
     * @returns Boolean
     */


	/** ### showScrollButton
	 * Determines the behavior of scroll buttons when tabs are set to `scrollable`.
	 * $$ tab.showScrollButton( mode ) $$
	 * @param {String} mode Values can be \n `auto` : will only present them when not all the items are visible \n `desktop` : will only present them on medium and larger viewports \n `on` : will always present them \n `off` : will never present them.
	 */


	/** ### getLayoutIndex
	 * Get the index of the corresponding layout.
	 * @param {Object} layout The layout to check.
	 * @returns Number
	 */


	/** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ tab.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text The text of the tab item. @arg {Number} index The index of the corresponding tab item. @arg {Object} pos The position of the touch event.
     */


    /** ### setCornerRadius
     * Sets the corner radius of the tab.
     * $$ tab.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


    /** ### setIndicatorStyle
     * Add a custom styling to the indicator. Note: This behaves differently when the viewport is resize.
     * $$ tab.setIndicatorStyle(width, thickness, color, radius)
     * @param {Number} width Fraction of the tab item width (horizontal tabs) or height (vertical tabs)
     * @param {Number} thickness Thickness in pixels
     * @param {String} color Hexadecimal color of the form `#rrggbb`
     * @param {Number} radius The corner radius in pixels
     */


    /** ### getIndicatorStyle
     * Returns the indicator style as an object. Props are `width`, `thickness`, `color`, `radius` and `fw` which is the actual width or height.
     * $$ var s = tab.getIndicatorStyle()
     * @returns object
     */


    /** ### setTabPadding
     * Sets the padding of the tab items.
     * $$ tab.setTabPadding(left, top, right, bottom, mode) $$
     * @param {Number} [left] The tab-item left padding.
     * @param {Number} [top] The tab-item top padding.
     * @param {Number} [right] The tab-item right padding.
     * @param {Number} [bottom] The tab-item bottom padding.
     * @param {String} [mode='px'] Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tab names array
        var tabs = ["Tab 1", "Tab 2", "Tab 3"]

        // Adds a tab component to the main layout.
        this.tabs = ui.addTabs(this.main, tabs, "", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn = ui.addButton(this.tab1, "Button", "Secondary", 0.5)

        // get the second tab and add a text control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.txt = ui.addText(this.tab2, "Lorem ipsum dolor set amit", "Center", 1)

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.ckb = ui.addCheckbox(this.tab3, "Check me", "Secondary")
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */


/**
@sample  With Icon
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tabs array with leading icons
        var tabs = [
            ["favorite", "Favorites"],
            ["bluetooth", "Bluetooth"],
            ["wifi", "Connection"]
        ]

        // Adds a tab component to the main layout and passing the `icon` option
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn = ui.addButton(this.tab1, "Button", "Secondary", 0.5)

        // get the second tab and add a text control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.txt = ui.addText(this.tab2, "Lorem ipsum dolor set amit", "Center", 1)

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.ckb = ui.addCheckbox(this.tab3, "Check me", "Secondary")
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */


/**
@sample Swipeable tabs
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tabs names array
        var tabs = ["Tab 1", "Tab 2", "Tab 3"]

        // Adds a tab component to the main layout and passing the `swipeable` option
        // to enable swiping gesture
        this.tabs = ui.addTabs( this.main, tabs, "Swipeable", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a text control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.tab1.backColor = "yellow"
        this.txt = ui.addText(this.tab1, "<--- Swipe to the left", "Center", 1)
        
        // get the second tab and add a button control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.backColor = "green"

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.backColor = "blue"
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */


/**
@sample Open tabs dynamically
class Main extends App
{
    onStart()
    {
        // Set the primary and secondary theme colors
        ui.setThemeColor("#673ab7", "#ffc107")

        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tabs names array with leading icons
        var tabs = [
            ["favorite", "Favorites"],
            ["bluetooth", "Bluetooth"],
            ["wifi", "Connection"]
        ]

        // Adds a tab component to the main layout
        this.tabs = ui.addTabs(this.main, tabs, "Icon,Center,Primary", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        // to open the second tab by its index
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn1 = ui.addButton(this.tab1, "Open next")
        this.btn1.setOnTouch(() => {
            this.tabs.showTabByIndex( 1 )
        })

        // get the second tab and add a button control
        // to open the last tab by its index
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.btn2 = ui.addButton(this.tab2, "Open next", "Primary")
        this.btn2.setOnTouch(() => {
            this.tabs.showTabByIndex( 2 )
        })

        // get the third tab and add a button control 
        // to open the first tab by its tab name
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.btn3 = ui.addButton(this.tab3, "Open previous", "Secondary")
        this.btn3.setOnTouch(() => {
            this.tabs.showTab( "Favorites" )
        })
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */


/**
@sample Icon only
class Main extends App
{
    onStart()
    {
        // Set the primary and secondary theme colors
        ui.setTheme( "dark" )

        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "FillXY,VCenter")

        // Initialize tabs array with icons only
        var tabs = ["favorite", "person", "wifi"];

        // Adds a tab component to the main layout
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 1, 1)

        // Set the tab height to 40px
        this.tabs.tabHeight = 40;

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn = ui.addButton(this.tab1, "Button", "Secondary", 0.5)

        // get the second tab and add a text control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.txt = ui.addText(this.tab2, "Lorem ipsum dolor set amit", "Center", 1)

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.ckb = ui.addCheckbox(this.tab3, "Check me", "Secondary")
    }

    onChange(tab, index)
    {
        ui.showPopup(tab + " : Index " + index, "Bottom")
    }
}
 */


/**
@sample Custom colors and sizes
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "FillXY,VCenter")

        // Initialize tabs array with leading icons
        var tabs = [
            ["favorite", "Favorites"],
            ["bluetooth", "Bluetooth"],
            ["wifi", "Connection"]
        ]

        // Adds a tab component to the main layout
        // add some styling to the backColor, textColor, iconColor, iconSize and indicator
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 0.8, 0.8)
        this.tabs.backColor = "#ffccbc"
        this.tabs.textColor = "#f4511e"
        this.tabs.iconColor = "#f4511e"
        this.tabs.iconSize = "1.5rem"
        this.tabs.setIndicatorStyle(0.25, 4, "#f4511e", 4)
    }
}
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered
    main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
    main.backColor = "#e0e0e0"

    # Add text control to the main layout
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus deleniti, eum nulla rerum dignissimos nihil, quidem facere repellendus necessitatibus incidunt non quasi doloremque delectus repellat pariatur dolorum. Omnis, vero."
    ui.addText(main, text, "Justify", 0.8)

    # Add divider control to the main layout
    div = ui.addDivider(main, 0.8)

    # Add more text control to the main layout
    ui.addText(main, text, "Justify", 0.8)

    # Add an inset divider to the main layout
    div = ui.addDivider(main, 0.8, "inset")

    ui.addText(main, text, "Justify", 0.8)
 */


/**
@sample Python With Icon
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered
    main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
    main.backColor = "#e0e0e0"

    # Initialize tabs array with leading icons
    tabs = [
        ["favorite", "Favorites"],
        ["bluetooth", "Bluetooth"],
        ["wifi", "Connection"]
    ]

    # Adds a tab component to the main layout and passing the `icon` option
    tabs = ui.addTabs(main, tabs, "Icon", 0.8, 0.8)

    # Handle tab changes
    tabs.setOnChange( onChange )

    # get the first tab and add a button control
    tab1 = tabs.getLayout(0)
    tab1.options = "VCenter"
    btn = ui.addButton(tab1, "Button", "Secondary", 0.5)

    # get the second tab and add a text control.
    tab2 = tabs.getLayout(1)
    tab2.options = "VCenter"
    txt = ui.addText(tab2, "Lorem ipsum dolor set amit", "Center", 1)

    # get the third tab and add a checkbox control
    tab3 = tabs.getLayout(2)
    tab3.options = "VCenter"
    ckb = ui.addCheckbox(tab3, "Check me", "Secondary")

def onChange(tab, index):
    ui.showPopup( tab + " : Index " + str(index))
 */


/**
@sample Python Swipeable tabs
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered
    main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
    main.backColor = "#e0e0e0"

    # Initialize tabs names array
    tabs = ["Tab 1", "Tab 2", "Tab 3"]

    # Adds a tab component to the main layout and passing the `swipeable` option
    # to enable swiping gesture
    tabs = ui.addTabs( main, tabs, "Swipeable", 0.8, 0.8)

    # Handle tab changes
    tabs.setOnChange( onChange )

    # get the first tab and add a text control
    tab1 = tabs.getLayout(0)
    tab1.options = "VCenter"
    tab1.backColor = "yellow"
    txt = ui.addText(tab1, "<--- Swipe to the left", "Center", 1)

    # get the second tab and add a button control.
    tab2 = tabs.getLayout(1)
    tab2.backColor = "green"

    # get the third tab and add a checkbox control
    tab3 = tabs.getLayout(2)
    tab3.backColor = "blue"

def onChange(tab, index):
    ui.showPopup( tab + " : Index " + str(index))
 */


/**
@sample Python Open tabs dynamically
from hybrid import ui

def OnStart():
    # Set the primary and secondary theme colors
    ui.setThemeColor("#673ab7", "#ffc107")

    # Creates a layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "FillXY,VCenter")
    main.backColor = "#e0e0e0"

    # Initialize tabs names array with leading icons
    tabs = [
        ["favorite", "Favorites"],
        ["bluetooth", "Bluetooth"],
        ["wifi", "Connection"]
    ]

    # Adds a tab component to the main layout
    tabs = ui.addTabs(main, tabs, "Icon,Center,Primary", 0.8, 0.8)

    # Handle tab changes
    tabs.setOnChange( onChange )

    # get the first tab and add a button control
    # to open the second tab by its index
    tab1 = tabs.getLayout(0)
    tab1.options = "VCenter"
    btn1 = ui.addButton(tab1, "Open next")
    btn1.setOnTouch(lambda event: tabs.showTabByIndex(1))

    # get the second tab and add a button control
    # to open the last tab by its index
    tab2 = tabs.getLayout(1)
    tab2.options = "VCenter"
    btn2 = ui.addButton(tab2, "Open next", "Primary")
    btn2.setOnTouch(lambda event: tabs.showTabByIndex(2))

    # get the third tab and add a button control
    # to open the first tab by its tab name
    tab3 = tabs.getLayout(2)
    tab3.options = "VCenter"
    btn3 = ui.addButton(tab3, "Open previous", "Secondary")
    btn3.setOnTouch(lambda event: tabs.showTab("Favorites"))

def onChange(tab, index):
    ui.showPopup( tab + " : Index " + str(index))
 */


/**
@sample Python Icon only

 */


