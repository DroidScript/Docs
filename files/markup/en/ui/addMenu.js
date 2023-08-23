// ------------- HEADER SECTION ------------- 


/** # addMenu #
 * @abbrev men
 * @brief addMenu
 * 
 * $$ men = ui.addMenu(parent, list, options, width, height) $$ 
 * @param {obj} parent The component where to anchor the Menu.
 * @param {lst} list A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon:title` \n Add a `colon` before an item to display it as the label text.
 * @param {str} options A comma separated options for the Menu. Values can be \n Color: `Primary` `Secondary` `Error` \n List: `Dense` \n Icons: `Icon`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Menu Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a pop-up menu into your components.

 These are examples on how you can format your list.

 Basic list
<js> var lst = [ 'Item 1', 'Item 2', 'Item 3' ]; </js>


 List with icons
<js> var lst = ['favorite : Favorites', 'person : Account', 'delete : Trash Bin']; </js>


 List with group title
<js> var lst = [' : This is a label', 'Item 1', 'Item 2', 'Item 3']; </js>


<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addMenu Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#cornerradius-45" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-50" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-55" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-60" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-65" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#itempadding-70" data-transition="pop" data-rel="popup" class="ui-link">itemPadding </a></div><div class="samp"><a href="#left-75" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#list-80" data-transition="pop" data-rel="popup" class="ui-link">list </a></div><div class="samp"><a href="#margins-85" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-90" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-95" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-100" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-105" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-110" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-115" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#textcolor-120" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-125" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-130" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-135" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-140" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-145" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="cornerradius-45" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-50" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-60" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-65" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="itempadding-70" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of each menu item. See also <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setItemPadding</span> method.</p></div><div data-role="popup" id="left-75" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="list-80" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the items in the menu. You can also pass a comma separated string.</p></div><div data-role="popup" id="margins-85" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-100" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-105" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-110" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="textcolor-120" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-125" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the menu is touch
 * $$ men.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["item ","icon ","index "],"pTypes":["str-The menu item text.","str-The menu item icon.","num-The menu item index."]}
 */


/** ### show ###
 * @brief show
 * Show the menu pop-up
 * If you passed a parent on initialization, then the menu si anchored on that component
 * $$ men.show(parent) $$
 * @param {obj} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
 */


/** ### hide ###
 * @brief hide
 * Hide the pop-up menu
 * $$ men.hide() $$
 */


/** ### setList ###
 * @brief setList
 * Updates the list items on the menu
 * $$ men.setList(list) $$
 * @param {lst} list The list items to show.
 */


/** ### addItem ###
 * @brief addItem
 * Adds an item in the menu list
 * $$ men.addItem(name, index) $$
 * @param {str} name The new item to be added.
 * @param {num} index The index at which to add the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the menu items list by its index
 * $$ men.removeItemByIndex(index) $$
 * @param {num} index The index of the item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the menu items list by its name
 * $$ men.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item
 * $$ men.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item
 * $$ men.shiftItem() $$
 */


/** ### setPosition ###
 * @brief setPosition
 * Set the position of the menu from the left and top of the anchor component
 * $$ men.setPosition(left, top) $$
 * @param {num} left The position of the menu from the left of the parent or anchor component. The unit is in pixels.
 * @param {num} top The position of the menu from the top of the parent or anchor component. The unit is in pixels.
 */


/** ### setAutoFocus ###
 * @brief setAutoFocus
 * Sets the autofocus value of the menu items
 * $$ men.setAutoFocus(bool) $$
 * @param {bin} bool Value can be `true` or `false`
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the menu popup
 * $$ men.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` or `false`. `false` to disable.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item the menu popup
 * $$ men.getEnabled(index) $$
 * @param {num} index The index of the item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the menu popup by its name
 * $$ men.setEnabledByName(name, value) $$
 * @param {str} name The name of the corresping item the menu.
 * @param {bin} value Values can be `true` or `false`. `false` to disable an item.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of an item in the menu popup
 * $$ men.getEnabledByName(name) $$
 * @param {str} name The name of the item.
 * @returns bin
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ men.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ men.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ men.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ men.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ men.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ men.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ men.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ men.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ men.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ men.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ men.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ men.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ men.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic menu
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a button control to the layout
        this.btn = ui.addButton(this.main, "Show Menu", "Primary")
        this.btn.setOnTouch( this.onTouch )

        // Menu items to display in the popup
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a menu passing the button control as anchor
        this.menu = ui.addMenu(this.btn, items)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch()
    {
        // show the menu
        this.menu.show()
    }

    menuTouch( item )
    {
        ui.showPopup( item )
    }
}
 */
    
            
    
/**
@sample Changing anchor component
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildSpacing( "Evenly" )

        // Add a first button control to the layout
        this.btn1 = ui.addButton(this.main, "Button 1", "Primary")
        this.btn1.setOnTouch( this.onTouch1 )

        // Add a second button control to the layout
        this.btn2 = ui.addButton(this.main, "Button 2", "Secondary")
        this.btn2.setOnTouch( this.onTouch2 )

        // Menu items to display the menu popup
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a menu without anchor component
        this.menu = ui.addMenu(null, items)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch1()
    {
        // Show the menu on button 1
        this.menu.show( this.btn1 )
    }

    onTouch2()
    {
        // Show the menu on button 2
        this.menu.show( this.btn2 )
    }

    menuTouch( item )
    {
        ui.showPopup( item )
    }
}
 */
    
            
    
/**
@sample With icons and disabled items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Show Menu", "Primary")
        this.btn.setOnTouch( this.onTouch )

        // List items with icons
        var items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

        // Add a menu passing the btn as anchor component
        this.menu = ui.addMenu(this.btn, items, "Icons,Primary,Dense")

        // Disable the second menu item
        this.menu.setEnabled(1, false)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch()
    {
        // show the menu
        this.menu.show()
    }

    menuTouch( item )
    {
        // display the selected item
        ui.showPopup( item )
    }
}
 */
    
            
    
/**
@sample Anchor position on mouse
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setOnContextMenu( this.onMenu )

        // Add a text control to the layout
        this.txt = ui.addText(this.main, "Right click anywhere on the screen.")

        // List items with icons
        var items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

        // Add menu passing the btn as anchor component
        this.menu = ui.addMenu(null, items, "Icons,Dense")

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onMenu( pos )
    {
        // show the menu on the position of the mouse
        this.menu.show(pos.x, pos.y)
    }

    menuTouch( item )
    {
        // display the selected item
        ui.showPopup( item )
    }
}
 */
    
            