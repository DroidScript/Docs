// ------------- HEADER SECTION ------------- 


/** # addTabs #
 * @brief addTabs
 * 
 * $$ ui.addTabs(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the Tabs Component.
 * @param {lst} list An array of tab names.
 * @param {str_com} options Enable swipe: `Swipeable` \n `Colors: `Primary` `Secondary` `Inherit` `Transparent` `Default` \n `Variant: `Standard` `Scrollable` `FullWidth` \n `Layout: `Linear`, `Absolute` \nUtils: `Icon` `Center` `Paper`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Tabs Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Tabs Component into your layout.

 Default Tab variant for mobile screens is <col nobox #4c4>fullWidth</col> unless provided.

### Properties
These are the setter and getter properties for the addTabs Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>centered:"bin:'Sets or returns a boolean value whether the tabs are centered or not.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the tab bar. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>elevation:"num:'Sets or returns the elevation of the tab bar. Make sure to pass a <col nobox #fb8c00>Paper</col> option for this to work.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconColor:"str:'Sets or returns the color ofthe tab icon.'"</smp>
<smp noinl>iconSize:"num:'Sets or returns the tab icon.'"</smp>
<smp noinl>indicatorColor:"str:'Sets or returns the color of the indicator bar. You can pass theme color <col nobox #fb8c00>primary</col> or <col nobox #fb8c00>secondary</col> or in hexadecimal format <col nobox #fb8c00>#rrggbb</col>.'"</smp>
<smp noinl>indicatorRadius:"num:'Sets or returns the corner radius of the indicator bar in pixels.'"</smp>
<smp noinl>indicatorThickness:"num:'Sets or returns the thickness of the indicator bar in pixels.'"</smp>
<smp noinl>indicatorWidth:"num:'Sets or returns the width of the indicator bar as a fraction of the tab item width. Works only on <col nobox #fb8c00>FullWidth</col> tab.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>scrollButtonMode:"str:'Sets or returns the scroll button mode when tab items overflow the width of its container. Values are <col nobox #fb8c00>auto</col> <col nobox #fb8c00>desktop</col> <col nobox #fb8c00>on</col> and <col nobox #fb8c00>of</col>.'"</smp>
<smp noinl>tabHeight:"num:'Sets or returns the height of the tab in pixels.'"</smp>
<smp noinl>tabPadding:"num:'Sets or returns the padding of the tab items. The return objects has the following props: <col nobox #fb8c00>left</col>, <col nobox #fb8c00>top</col>, <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col>. You can pass an object to set paddings on all side or see <col nobox #fb8c00>setTabPadding</col> method.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the theme color for the tab bar titles <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>. You can also pass a hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant of the Tabs Component. Values can be <col nobox #fb8c00>Standard</col> <col nobox #fb8c00>Scrollable</col> or <col nobox #fb8c00>FullWidth</col>'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>

 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function when the value of the tab changes
 * $$ undefined.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["name ","index "],"pTypes":["str-The tab name.","num-The index of the corresponding tab."]}
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Add a callback function when a tab item i click
 * $$ undefined.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["name ","The "],"pTypes":["str-The tab name text.","num-tab item index."]}
 */


/** ### setTabs ###
 * @brief setTabs
 * Sets the tab titles array
 * $$ undefined.setTabs(tabs) $$
 * @param {lst} tabs The tab titles array. See examples for format.
 */


/** ### addTab ###
 * @brief addTab
 * Add or insert a tab to the Tabs Component
 * $$ undefined.addTab(name, icon, index) $$
 * @param {str} name The name of the tab.
 * @param {str} icon Material icon font.
 * @param {num} index The index in which to insert the tab.
 */


/** ### setTitleText ###
 * @brief setTitleText
 * Sets a new title for the corresponding tab
 * $$ undefined.setTitleText(index, title) $$
 * @param {num} index Index of the tab.
 * @param {str} title The new title.
 */


/** ### setIcon ###
 * @brief setIcon
 * Sets an icon to a corresponding tab title
 * $$ undefined.setIcon(index, icon) $$
 * @param {num} index The index of the tab.
 * @param {str} icon Material icon font.
 */


/** ### removeTabByIndex ###
 * @brief removeTabByIndex
 * Removes a tab item by its corresponding index
 * $$ undefined.removeTabByIndex(index) $$
 * @param {num} index The index of the corresponding tab to remove.
 */


/** ### removeTabByName ###
 * @brief removeTabByName
 * Removes a tab item by its corresponding name
 * $$ undefined.removeTabByName(name) $$
 * @param {str} name The name of the corresponding tab to remove.
 */


/** ### getLayout ###
 * @brief getLayout
 * Returns the layout of the corresponding tab. You can then add components into the returned layout
 * $$ undefined.getLayout(name) $$
 * @param {str} name The name of the tab. You can also pass the index of the tab.
 * @returns obj-Layout Component
 */


/** ### showTab ###
 * @brief showTab
 * Show a tab panel by its corresponding name. This will make the tab in active state
 * $$ undefined.showTab(name) $$
 * @param {str} name The name of the tab to be shown.
 */


/** ### showTabByIndex ###
 * @brief showTabByIndex
 * Show a tab panel by its corresponding name. This will make the tab in active state
 * $$ undefined.showTabByIndex(index) $$
 * @param {num} index The index of the tab to be shown.
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable a tab item. Pass `index` as number if you want the corresponding tab index to be enabled or disabled
 * Pass `index` as Boolean, if you want to disable the entire Tabs component
 * $$ undefined.setEnabled(index, value) $$
 * @param {num} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of a tab
 * $$ undefined.getEnabled(index) $$
 * @param {num} index The index of the corresponding tab.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a tab by its name
 * $$ undefined.setEnabledByName(name, value) $$
 * @param {str} name The name of the tab.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a tab by its name
 * $$ undefined.getEnabledByName(name) $$
 * @param {str} name The name of the tab.
 * @returns bin
 */


/** ### showScrollButton ###
 * @brief showScrollButton
 * Determines the behavior of scroll buttons when tabs are set to `scrollable
 * $$ undefined.showScrollButton(mode) $$
 * @param {str} mode Values can be \n `auto` : will only present them when not all the items are visible \n `desktop` : will only present them on medium and larger viewports \n `on` : will always present them \n `off` : will never present them.
 */


/** ### getLayoutIndex ###
 * @brief getLayoutIndex
 * Get the index of the corresponding layout
 * $$ undefined.getLayoutIndex(layout) $$
 * @param {obj} layout The layout to check.
 * @returns num
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ undefined.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-The text of the tab item.","num-The index of the corresponding tab item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the tab
 * $$ undefined.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### setIndicatorStyle ###
 * @brief setIndicatorStyle
 * Add a custom styling to the indicator color
 * $$ undefined.setIndicatorStyle(width, thickness, color, radius) $$
 * @param {num} width Fraction of the tab item width. This works only on `fullWidth` tab.
 * @param {num} thickness Thickness in pixels.
 * @param {str} color Hexadecimal color of the form `#rrggbb`.
 * @param {num} radius The corner radius in pixels.
 */


/** ### setTabPadding ###
 * @brief setTabPadding
 * Sets the padding of the tab items
 * $$ undefined.setTabPadding(left, top, right, bottom, mode) $$
 * @param {num} left The tab-item left padding.
 * @param {num} top The tab-item top padding.
 * @param {num} right The tab-item right padding.
 * @param {num} bottom The tab-item bottom padding.
 * @param {str} mode Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ undefined.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ undefined.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ undefined.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ undefined.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ undefined.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ undefined.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ undefined.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ undefined.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ undefined.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ undefined.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ undefined.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ undefined.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ undefined.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ undefined.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



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
    
            