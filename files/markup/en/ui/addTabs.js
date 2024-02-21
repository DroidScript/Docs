// ------------- HEADER SECTION -------------


/** # addTabs #
 * @abbrev tab
 * @brief addTabs
 * Adds a Tabs Component into your layout.
 *
 *  Default Tab variant for mobile screens is <col nobox #4c4>fullWidth</col> unless provided.
 * $$ tab = ui.addTabs(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the Tabs Component.
 * @param {str_com} [list] An array of tab names.
 * @param {str_com} [options] Enable swipe: `Swipeable` \n `Colors`: `Primary` `Secondary` `Inherit` `Transparent` `Default` \n `Variant`: `Standard` `Scrollable` `FullWidth` \n `Layout`: `Linear`, `Absolute` \nUtils: `Icon` `Center` `Paper`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Tabs
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** @extern backColor */

/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** ### centered
 * @prop
 * Sets or returns a boolean value whether the tabs are centered or not.
 * @returns bin
 */


/** ### color
 * @prop
 * Sets or returns the theme color of the tab bar. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */


/** @extern cornerRadius */

/** @extern disabled */

/** ### elevation
 * @prop
 * Sets or returns the elevation of the tab bar. Make sure to pass a <col nobox #fb8c00>Paper</col> option for this to work.
 * @returns num
 */


/** @extern fontFile */

/** @extern height */

/** ### iconColor
 * @prop
 * Sets or returns the color ofthe tab icon.
 * @returns str
 */


/** ### iconSize
 * @prop
 * Sets or returns the tab icon.
 * @returns num
 */


/** ### indicatorColor
 * @prop
 * Sets or returns the color of the indicator bar. You can pass theme color <col nobox #fb8c00>primary</col> or <col nobox #fb8c00>secondary</col> or in hexadecimal format <col nobox #fb8c00>#rrggbb</col>.
 * @returns str
 */


/** ### indicatorRadius
 * @prop
 * Sets or returns the corner radius of the indicator bar in pixels.
 * @returns num
 */


/** ### indicatorThickness
 * @prop
 * Sets or returns the thickness of the indicator bar in pixels.
 * @returns num
 */


/** ### indicatorWidth
 * @prop
 * Sets or returns the width of the indicator bar as a fraction of the tab item width. Works only on <col nobox #fb8c00>FullWidth</col> tab.
 * @returns num
 */


/** @extern isVisible */

/** @extern left */

/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

/** ### scrollButtonMode
 * @prop
 * Sets or returns the scroll button mode when tab items overflow the width of its container. Values are <col nobox #fb8c00>auto</col> <col nobox #fb8c00>desktop</col> <col nobox #fb8c00>on</col> and <col nobox #fb8c00>of</col>.
 * @returns str
 */


/** ### tabHeight
 * @prop
 * Sets or returns the height of the tab in pixels.
 * @returns num
 */


/** ### tabPadding
 * @prop
 * Sets or returns the padding of the tab items. The return objects has the following props: <col nobox #fb8c00>left</col>, <col nobox #fb8c00>top</col>, <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col>. You can pass an object to set paddings on all side or see <col nobox #fb8c00>setTabPadding</col> method.
 * @returns num
 */


/** ### textColor
 * @prop
 * Sets or returns the theme color for the tab bar titles <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>. You can also pass a hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */


/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### variant
 * @prop
 * Sets or returns the variant of the Tabs Component. Values can be <col nobox #fb8c00>Standard</col> <col nobox #fb8c00>Scrollable</col> or <col nobox #fb8c00>FullWidth</col>
 * @returns str
 */


/** @extern visibility */

/** @extern width */

/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function when the value of the tab changes
 * $$ tab.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str-The tab name.","num-The index of the corresponding tab."]}
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Add a callback function when a tab item i click
 * $$ tab.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str-The tab name text.","num-tab item index."]}
 */


/** ### setTabs ###
 * @brief setTabs
 * Sets the tab titles array
 * $$ tab.setTabs(tabs) $$
 * @param {lst} tabs The tab titles array. See examples for format.
 */


/** ### addTab ###
 * @brief addTab
 * Add or insert a tab to the Tabs Component
 * $$ tab.addTab(name, icon, index) $$
 * @param {str} name The name of the tab.
 * @param {str} icon Material icon font.
 * @param {num} index The index in which to insert the tab.
 */


/** ### setTitleText ###
 * @brief setTitleText
 * Sets a new title for the corresponding tab
 * $$ tab.setTitleText(index, title) $$
 * @param {num} index Index of the tab.
 * @param {str} title The new title.
 */


/** ### setIcon ###
 * @brief setIcon
 * Sets an icon to a corresponding tab title
 * $$ tab.setIcon(index, icon) $$
 * @param {num} index The index of the tab.
 * @param {str} icon Material icon font.
 */


/** ### removeTabByIndex ###
 * @brief removeTabByIndex
 * Removes a tab item by its corresponding index
 * $$ tab.removeTabByIndex(index) $$
 * @param {num} index The index of the corresponding tab to remove.
 */


/** ### removeTabByName ###
 * @brief removeTabByName
 * Removes a tab item by its corresponding name
 * $$ tab.removeTabByName(name) $$
 * @param {str} name The name of the corresponding tab to remove.
 */


/** ### getLayout ###
 * @brief getLayout
 * Returns the layout of the corresponding tab. You can then add components into the returned layout
 * $$ tab.getLayout(name) $$
 * @param {str} name The name of the tab. You can also pass the index of the tab.
 * @returns uio-addLayout
 */


/** ### showTab ###
 * @brief showTab
 * Show a tab panel by its corresponding name. This will make the tab in active state
 * $$ tab.showTab(name) $$
 * @param {str} name The name of the tab to be shown.
 */


/** ### showTabByIndex ###
 * @brief showTabByIndex
 * Show a tab panel by its corresponding name. This will make the tab in active state
 * $$ tab.showTabByIndex(index) $$
 * @param {num} index The index of the tab to be shown.
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable a tab item. Pass `index` as number if you want the corresponding tab index to be enabled or disabled
 * Pass `index` as Boolean, if you want to disable the entire Tabs component
 * $$ tab.setEnabled(index, value) $$
 * @param {num} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of a tab
 * $$ tab.getEnabled(index) $$
 * @param {num} index The index of the corresponding tab.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a tab by its name
 * $$ tab.setEnabledByName(name, value) $$
 * @param {str} name The name of the tab.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a tab by its name
 * $$ tab.getEnabledByName(name) $$
 * @param {str} name The name of the tab.
 * @returns bin
 */


/** ### showScrollButton ###
 * @brief showScrollButton
 * Determines the behavior of scroll buttons when tabs are set to `scrollable
 * $$ tab.showScrollButton(mode) $$
 * @param {str} mode Values can be \n `auto` : will only present them when not all the items are visible \n `desktop` : will only present them on medium and larger viewports \n `on` : will always present them \n `off` : will never present them.
 */


/** ### getLayoutIndex ###
 * @brief getLayoutIndex
 * Get the index of the corresponding layout
 * $$ tab.getLayoutIndex(layout) $$
 * @param {obj} layout The layout to check.
 * @returns num
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ tab.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index","event"],"pTypes":["str-The text of the tab item.","num-The index of the corresponding tab item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the tab
 * $$ tab.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
 * @param {num} [tl] Top-left corner radius.
 * @param {num} [tr] Top-right corner radius.
 * @param {num} [bl] Bottom-left corner radius.
 * @param {num} [br] Bottom-right corner radius.
 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
 */


/** ### setIndicatorStyle ###
 * @brief setIndicatorStyle
 * Add a custom styling to the indicator color
 * $$ tab.setIndicatorStyle(width, thickness, color, radius) $$
 * @param {num} width Fraction of the tab item width. This works only on `fullWidth` tab.
 * @param {num} thickness Thickness in pixels.
 * @param {str} color Hexadecimal color of the form `#rrggbb`.
 * @param {num} radius The corner radius in pixels.
 */


/** ### setTabPadding ###
 * @brief setTabPadding
 * Sets the padding of the tab items
 * $$ tab.setTabPadding(left?, top?, right?, bottom?, mode='px') $$
 * @param {num} [left] The tab-item left padding.
 * @param {num} [top] The tab-item top padding.
 * @param {num} [right] The tab-item right padding.
 * @param {num} [bottom] The tab-item bottom padding.
 * @param {str} [mode='px'] Unit of measurement. You can pass `%` `rem` `vw`.
 */


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
@sample With Icon
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
        // add some styling to the backColor, textColor, iconColor, iconSize and indicatorColor
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 0.8, 0.8)
        this.tabs.backColor = "#ffccbc"
        this.tabs.textColor = "#f4511e"
        this.tabs.iconColor = "#f4511e"
        this.tabs.iconSize = "1.5rem"
        this.tabs.indicatorColor = "#f4511e"
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
