// ------------- HEADER SECTION ------------- 


/** # addAppBar #
 * @abbrev apb
 * @brief addAppBar
 * 
 * $$ apb = ui.addAppBar(parent, title, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the AppBar
 * @param {str} title The title text of the appbar
 * @param {str} options A comma separated options. Can be one or a combination of the following: \n `Menu` : Adds a menu icon on the left \n `Primary` `Secondary` `Transparent` `Inherit` `Default` : Adds a color \n `Absolute` `Static` `Fixed` `Relative` : Adds a positioning
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-AppBar Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an AppBar on your app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addAppBar Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-45" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-60" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-65" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#icon-70" data-transition="pop" data-rel="popup" class="ui-link">icon </a></div><div class="samp"><a href="#isvisible-75" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#layout-80" data-transition="pop" data-rel="popup" class="ui-link">layout </a></div><div class="samp"><a href="#left-85" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-90" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#menu-95" data-transition="pop" data-rel="popup" class="ui-link">menu </a></div><div class="samp"><a href="#opacity-100" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-105" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-110" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-115" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-120" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-125" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#text-130" data-transition="pop" data-rel="popup" class="ui-link">text </a></div><div class="samp"><a href="#textcolor-135" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-140" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#textvariant-145" data-transition="pop" data-rel="popup" class="ui-link">textVariant </a></div><div class="samp"><a href="#top-150" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-155" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-160" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-165" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the AppBar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Transparent</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Inherit</span></p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius of the accordion panel. You can also pass an array of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[tl&#44; tr&#44; bl&#44; br]</span>. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setCornerRadius</span> for customization.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="icon-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the icon of the menu button.</p></div><div data-role="popup" id="isvisible-75" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="layout-80" class="ui-content"><p><span style="color:#4c4;">Layout</span><br>Returns the right layout of the appbar where you can add controls.</p></div><div data-role="popup" id="left-85" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-90" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="menu-95" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the appbar has menu button.</p></div><div data-role="popup" id="opacity-100" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-110" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-115" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-120" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-125" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="text-130" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or return the AppBar title text</p></div><div data-role="popup" id="textcolor-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the hexadecimal color of the appbar title.</p></div><div data-role="popup" id="textsize-140" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the font size of the title text.</p></div><div data-role="popup" id="textvariant-145" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the title text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h1</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h2</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h3</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h4</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h5</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h6</span></p></div><div data-role="popup" id="top-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnMenu ###
 * @brief setOnMenu
 * Sets a function to be called when the user clicks the menu
 * $$ apb.setOnMenu(callback) $$
 * @param {fnc_json} callback 
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


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ apb.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ apb.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ apb.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ apb.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ apb.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ apb.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ apb.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ apb.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ apb.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ apb.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ apb.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ apb.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ apb.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ apb.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ apb.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ apb.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



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
    
            