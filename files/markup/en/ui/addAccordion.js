// ------------- HEADER SECTION -------------


/** # addAccordion #
 * @abbrev acc
 * @brief addAccordion
 * 
 * $$ acc = ui.addAccordion(parent, titles, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the text.
 * @param {obj} titles An array of accordion titles.
 * @param {str_com} options one or a combination of the following: `Square` \n `Layout type `Linear` or `Absolute`
 * @param {num} width Fraction of the screen width: [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Accordion Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an accordion or expansion panel into your app. This is very useful to display controls that are grouped together.

### Properties
These are the setter and getter properties for the addAccordion Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius of the accordion panel. You can also pass an array of the form <col nobox #fb8c00>[tl, tr, bl, br]</col>. See also <col nobox #fb8c00>setCornerRadius</col> method.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns whether the accordion is disabled or not. <col nobox #fb8c00>True</col> only if all accordion is disable, otherwise <col nobox #fb8c00>false</col>.'"</smp>
<smp noinl>expandIcon:"str:'Sets or returns the material icon font for the expand icon.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>itemPadding:"lst:'Sets or returns the padding of each accordion item. See also <col nobox #fb8c00>setItemPadding</col> method.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>rounded:"bin:'Sets or returns whether the accordion is rounded or not.'"</smp>
<smp noinl>secondaryText:"lst:'Sets or returns the secondary text of the accordion items. See also <col nobox #fb8c00>setSecondaryText</col> method.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textColor1:"str:'Sets or returns the title text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>textColor2:"str:'Sets or returns the secondary text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>textSize1:"num:'Sets or returns the accordion title text size.'"</smp>
<smp noinl>textSize2:"num:'Sets or returns the accordion secondary text size.'"</smp>
<smp noinl>titleWidth:"num:'Sets and returns the width of the title as fraction. Useful when you have a long title.'"</smp>
<smp noinl>titles:"lst:'Sets or returns the list of titles for the accordion panel. Each element of the titles array is a string.'"</smp>
<smp noinl>toggle:"num:'Collapse or shrink a corresponding accordion by its index.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### getLayout ###
 * @brief getLayout
 * Get the layout of the corresponding accordion item. This is very useful when you add a control or component that will be displayed when the accordion collapse
 * $$ acc.getLayout(index) $$
 * @param {num} index The index of the accordion. You can also pass accordion title.
 * @returns obj-Layout Component
 */


/** ### setTitleText ###
 * @brief setTitleText
 * Update the accordion title by passing its corresponding index
 * $$ acc.setTitleText(index, title) $$
 * @param {num} index The index of the corresponding title to updates.
 * @param {str} title The new title text.
 */


/** ### setSecondaryText ###
 * @brief setSecondaryText
 * Adds a secondary text on the accordion
 * $$ acc.setSecondaryText(text, index) $$
 * @param {obj} text The secondary text to display. You can pass arguments as string or array by following the format below. \n String: `"Secodary text 1,Secondary text 2,Secondary text 3"` \n `Array`: `[ "Secondary text 1", "Secondary text 2", "Secondary text 3" ]`
 * @param {num} index If `index` is provided, the corresponding index will be updated with the new text.
 */


/** ### setExpandIcon ###
 * @brief setExpandIcon
 * Sets the expand icon at the right of the accordion
 * $$ acc.setExpandIcon(icon) $$
 * @param {str} icon A material icon
 */


/** ### addItem ###
 * @brief addItem
 * Adds an item to the accordion
 * $$ acc.addItem(title, secondaryText, index) $$
 * @param {str} title Accordion title
 * @param {str} secondaryText Accordion secondary text
 * @param {num} index The index at which the accordion item will be added. If `null`, the item will be added at the bottom of the accordion.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes accordion item by its index
 * $$ acc.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding accordion to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes accordion item by its title name
 * $$ acc.removeItemByName(title) $$
 * @param {str} title The title of the corresponding accordion to remove.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first accordion item
 * $$ acc.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last accordion item
 * $$ acc.popItem() $$
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable the accordion component or an item in the accordion component
 * $$ acc.setEnabled(index, value) $$
 * @param {num} index The index of the corresponding accordion.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an accordion item by its index
 * $$ acc.getEnabled(index) $$
 * @param {num} index The index of the accordion item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an accordion item by its name
 * $$ acc.setEnabledByName(name, value) $$
 * @param {str} name The title of the accordion
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of an accordion item by its name
 * $$ acc.getEnabledByName(name) $$
 * @param {str} name The title of the accordion.
 * @returns bin
 */


/** ### getLayoutIndex ###
 * @brief getLayoutIndex
 * Get the index of the corresponding layout
 * $$ acc.getLayoutIndex(layout) $$
 * @param {obj} layout The layout to check.
 * @returns num
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Sets a callback function when the accordion is touch
 * $$ acc.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["index","expand"],"pTypes":["num-The index of the corresponding accordion item.","bin-The expanded state of the accordion."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ acc.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["title","index","event"],"pTypes":["str-The accordion title text.","num-The index of the corresponding accordion item.","obj-The pointer event object."]}
 */


/** ### setTextColor ###
 * @brief setTextColor
 * Sets the color of the title and the secondary text respectively
 * $$ acc.setTextColor(color1, color2) $$
 * @param {str} color1 Color of the title text in hexadecimal format `#rrggbb`
 * @param {str} color2 Color of the secondary text in hexadecimal format `#rrggbb`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the top and bottom accordion panels
 * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ acc.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ acc.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ acc.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ acc.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ acc.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ acc.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ acc.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ acc.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ acc.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ acc.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ acc.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ acc.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ acc.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ acc.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Complete accordion implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        this.accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, this.accords, "", 0.9 )

        // Secondary text to display
        var secTxt = [
            "This is the secondary text 1",
            "This is the secondary text 2",
            "This is the secondary text 3"
        ]

        // sets the secondary text
        this.acc.setSecondaryText( secTxt )

        // Add ontouch event handler to the accordion
        this.acc.setOnTouch( this.onTouch )

        // Add controls to the first accordion layout
        this.lay1 = this.acc.getLayout( 0 )
        this.txt = ui.addText(this.lay1, "This is a text in the first layout.")

        // Add controls to the second layout
        this.lay2 = this.acc.getLayout( 1 )
        this.btn = ui.addButton(this.lay2, "Button", "Primary")

        // Add controls to the third layout
        this.lay3 = this.acc.getLayout( 2 )
        this.tfd = ui.addTextField(this.lay3, "", "Outlined", 0.3)
        this.tfd.label = "Enter some text"
    }
    
    onTouch(index, expand)
    {
        var msg = `${this.accords[index]} is ${expand ? "open" : "close"}`
        ui.showPopup( msg )
    }
}
 */
    
            
    
/**
@sample Items manipulation
class Main extends App
{
    onStart()
    {
        this.count = 1;

        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins(0, 0.01, 0, 0.01)

        var accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, accords, "", 0.9 )

        this.lay = ui.addLayout(this.main, "Linear", "Horizontal", 0.9)
        this.lay.childSpacing = "evenly"

        // add a button controls to add or remove accordion item
        this.btn1 = ui.addButton( this.lay, "Append Item" )
        this.btn1.setOnTouch( this.btn1_onTouch )

        this.btn2 = ui.addButton( this.lay, "Add Item in index 1" )
        this.btn2.setOnTouch( this.btn2_onTouch )

        this.btn3 = ui.addButton( this.lay, "Remove Item" )
        this.btn3.setOnTouch(  this.btn3_onTouch )
    }

    btn1_onTouch()
    {
        // add an item at the bottom of the accordion
        this.acc.addItem( "New Bottom Title", "New secondary text" )
    }

    btn2_onTouch()
    {
        var title = "New Title " + this.count++
        // insert item in the second index
        this.acc.addItem( title, "New secondary text", 1 )
    }

    btn3_onTouch()
    {
        this.acc.removeItemByIndex( 2 )
        ui.showPopup( "Second item is removed" )
    }
}
 */
    
            
    
/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout("main", "Linear", "VCenter")

        var items = ["Accordion 1", "Accordion 2", "Accordion 3"]
        var texts = ["Description for item 1", "Description for item 2", "Description for item 3"];

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion(this.main, items, "", 0.9)
        this.acc.setSecondaryText( texts )

        // Sets the background color
        this.acc.backColor = "#b2dfdb"

        // Sets the text-sizes
        this.acc.textSize1 = 18
        this.acc.textSize2 = 14

        // Sets the text colors
        this.acc.textColor1 = "#00695c"
        this.acc.textColor2 = "#009688"

        // Sets the corner radius
        this.acc.cornerRadius = 14

        // Sets the expand icon
        this.acc.expandIcon = "favorite"
    }
}
 */
    
            
    
/**
@sample Python Complete accordion implementation
from hybrid import ui

def OnStart():
    global accords
    # Creates a fullscreen main layout.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    accords = ["Accordion 1", "Accordion 2", "Accordion 3"]

    # Adds an accordion to the main layout
    acc = ui.addAccordion(main, accords, "", 0.9)

    # Secondary text to display
    secTxt = [
        "This is the secondary text 1",
        "This is the secondary text 2",
        "This is the secondary text 3"
    ]

    # sets the secondary text
    acc.setSecondaryText(secTxt)

    # Add ontouch event handler to the accordion
    acc.setOnTouch(onTouch)

    # Add controls to the first accordion layout
    lay1 = acc.getLayout(0)
    txt = ui.addText(lay1, "This is a text in the first layout.")

    # Add controls to the second layout
    lay2 = acc.getLayout(1)
    btn = ui.addButton(lay2, "Button", "Primary")

    # Add controls to the third layout
    lay3 = acc.getLayout(2)
    tfd = ui.addTextField(lay3, "", "Outlined", 0.3)
    tfd.label = "Enter some text"

def onTouch(index, expand):
    msg = f"{accords[index]} is {'open' if expand else 'close'}"
    ui.showPopup(msg)
 */
    
            
    
/**
@sample Python Items manipulation
from hybrid import ui

def OnStart():
    global acc, count
    count = 1

    # Creates a fullscreen main layout.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.01, 0, 0.01)

    accords = ["Accordion 1", "Accordion 2", "Accordion 3"]

    # Adds an accordion to the main layout
    acc = ui.addAccordion(main, accords, "", 0.9)

    lay = ui.addLayout(main, "Linear", "Horizontal", 0.9)
    lay.childSpacing = "evenly"

    # add a button controls to add or remove accordion item
    btn1 = ui.addButton(lay, "Append Item")
    btn1.setOnTouch(btn1_onTouch)

    btn2 = ui.addButton(lay, "Add Item in index 1")
    btn2.setOnTouch(btn2_onTouch)

    btn3 = ui.addButton(lay, "Remove Item")
    btn3.setOnTouch(btn3_onTouch)

def btn1_onTouch(event):
    # add an item at the bottom of the accordion
    acc.addItem("New Bottom Title", "New secondary text")

def btn2_onTouch(event):
    title = "New Title " + str(count)
    # insert item in the second index
    acc.addItem(title, "New secondary text", 1)
    count += 1

def btn3_onTouch(event):
    acc.removeItemByIndex(2)
    ui.showPopup("Second item is removed")
 */
    
            
    
/**
@sample Python Custom styles
from hybrid import ui

def OnStart():
    # Creates a fullscreen main layout.
    main = ui.addLayout("main", "Linear", "VCenter")

    items = ["Accordion 1", "Accordion 2", "Accordion 3"]
    texts = ["Description for item 1", "Description for item 2", "Description for item 3"]

    # Adds an accordion to the main layout
    acc = ui.addAccordion(main, items, "", 0.9)
    acc.setSecondaryText(texts)

    # Sets the background color
    acc.backColor = "#b2dfdb"

    # Sets the text-sizes
    acc.textSize1 = 18
    acc.textSize2 = 14

    # Sets the text colors
    acc.textColor1 = "#00695c"
    acc.textColor2 = "#009688"

    # Sets the corner radius
    acc.cornerRadius = 14

    # Sets the expand icon
    acc.expandIcon = "favorite"
 */
    
            