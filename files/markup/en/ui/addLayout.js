/** # Layout
 * @abbrev lay
 * Adds a layout into your app.
 * @jdocs A layout is the basic ui component of an app. It is where you add other ui components such as buttons, textfields, checkboxes, list, images and many more. To add a layout, simply call the `addLayout` method of the `ui` object.
 * $$ lay = ui.addLayout(parent, type, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
 * @param {String} type The layout type. Values can be `"Linear"`, `"Absolute"`, `"Frame"`, `"Slide"`, `"Card"`
 * @param {String} [options] A comma separated options.\nOrientation: `Horizontal`, `Vertical`\nHorizontal Alignment: `Left`, `Center`, `Right`\nVertical Alignment: `Top`, `VCenter`, `Bottom`\nDimensions: `FillXY`, `FillX`, `FillY`, `FillAxis`\nScroll: `ScrollX`, `ScrollY`, `ScrollXY`, `NoScrollBar`\nUtils:\n`BackColor` to apply theme background color rather than transparent.\n`NoScrollBar` to remove scrollbar when scroll options is passed.\n`TouchThrough` to enable touch events to propagate behind the layers in frame layouts.\n`"Touchable"` enable touch in card layout.\n`"Outlined"` card variant is outlined.\n`"Square"` card rounded corners is remove.
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Layout
 */


/**
 * There are 5 types of layouts: `"Linear"`, `"Absolute"`, `"Frame"`, `"Slide"` and `"Card"`. Layouts are transparent by default but you can set a background color or a background image. You can add child objects to the Layout by passing the layout as parent when initializing a control. By default, Layouts will auto-size to wrap and fit their contents but you have 3 more options as to how layout sizes within it's parent: `FillXY`, `FillX`, and `FillY`.
 * 
 * ### Linear Layouts
 * Linear layouts are probably the most common type and are used to organize controls in the `Vertical` or `Horizontal` orientation on the screen. You can also pass alignment options. For vertical alignment you can pass `Top`, `VCenter`, and `Bottom`. For horizontal alignment you can pass `Left`, `Center`, and `Right`. These will align your children accordingly. For children spacing, see `childSpacing` property below.
 * ### Absolute Layouts
 * Absolute layouts ignore all alignment options and allow the absolute positioning of controls by calling the `setPosition` method of each child control. However, you are encouraged to use linear layouts for most of your programs, unless it is absolutely necessary.
 * ### Frame Layouts
 * Frame layouts are used to display objects in front or behind each other. Everytime a child control is added, the new control is placed in a new layer in front of the previously added control at the top left of the frame. You can then use `setPosition` method of the child control to position it relative to the frame.
 * ### Slide Layouts
 * Slide layouts are used to display carousels or swipeable contents. The same as the Frame layout, this will add a new layer when a new control is added with a swipeable behaviour. You can pass alignment options to align your children within the Slide layout layer. Please note that `Vertical` and `Horizontal` options will be the direction of the swipe. If your parent layout is of type `Slide`, do not add `setOnTouch` callback handler in order for the slide layout to work perfectly.
 * ### Card Layouts
 * Card layouts are used to display surfaces with elevation and a rounder corners to emphasize its contents. This type of layout has default values for padding. You can clear the padding by setting the `padding` property to `0`. If you want to use the material design card implementation, refer to the `Card` component.
 * ### Dimensions
 * To set the width and height of a layout, pass a `width` and `height` argument as a `decimal fraction` of its parent's width and height.
 * In some scenarios where you want the layout to occupy the available space, you can add `"FillXY"` in the `options` argument to fill the available width and height of its parent. Similarly, when you want to fill the available horizontal space, you can pass `"FillX"` and `"FillY"` for filling the available vertical space.
 */


    /** ## Properties
     * Here are the available setters and getters for the Layout Component.
     * @prop {String} orientation Sets or returns the orientation of the controls in a Linear Layout. Values can be `'Horizontal'` or `"Vertical"`
     * @prop {String} alignment Sets or returns the horizontal alignment of the control in a Linear Layout. Values can be `"Left"` `"Center"` and `"Right"`
     * @prop {String} verticalAlignment Sets or returns the vertical alignment of the controls in a Linear Layout. Values can be `"Top"` `"VCenter"` or `"Bottom"`
     * @prop {String} childSpacing Sets or returns the spacing of the child control in a Linear Layout. Values can be `"Around"` `"Between"` `"Even"`
     * @prop {Number} currentSlide Sets or returns the index of the current slide.
     * @prop {Array} childMargins Sets or returns the margins of child components. The array is of the form `[left, top, right, bottom]`.
     * @prop {Array} children Returns all the children added to this layout.
     * @prop {Number} elevation Sets or returns the elevation of a card layout.
     * @prop {String} variant Sets or returns the card variant. Can be `"elevation"` or `"outlined"`
     * @prop {String} layoutType Sets or returns the layout type. Note: You cannot change the layout type of "Card" and "Slide" to another type.
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


	/** ## Methods ##
     * Here are the available methods for the Layout Component.
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


    /** ### setChildMargins ###
     * Sets a default margins for the children of the layout component.
     * $$ lay.setChildMargins( left, top, right, bottom, mode ) $$
     * @param {Number} [left] Left margin. You can also pass string e.g. `12rem`
     * @param {Number} [top] Top margin. You can also pass string e.g. `12rem`
     * @param {Number} [right] Right margin. You can also pass string e.g. `12rem`
     * @param {Number} [bottom] Bottom margin. You can also pass string e.g. `12rem`
     * @param {String} [mode='px'] Unit of measurement.\n`px` for pixels\n`%` relative to its parent dimension.\n`v` relative to viewport dimension,\n`rem`
     */


    /** ### goto
     * Transition to the given index.
     * $$ lay.goto( index )
     * @param {Number} index Index of a given layout.
     * @@ Works only for Slide Layouts.
     */


    /** ### next
     * Transition to the next slide.
     * $$ lay.next()
     */


    /** ### previous
     * Transition to the previous slide.
     * $$ lay.previous()
     */


    /** ### setOnSlide
     * Adds a callback function to be called when slide event is triggered.
     * $$ lay.setOnSlide( callback )
     * @param {Function} callback The function to be called on slide event. ---> @arg {Object} component The control component. @arg {Number} index The index of the slide.
     */


    /** ### getChildOrder
     * Returns the index of the child from the layout children stack in order.
     * $$ lay.getChildOrder( child )
     * @param {Object} child The child component of the layout.
     * @returns Number
     */


    /** ### childToFront
     * Move the child to the front.
     * $$ lay.childToFront( child )
     * @param {Object} child The child object of the layout.
     * @@ Works only for absolute layout.
     */


    /** ### hasChild
     * Check whether a component is a child of this layout.
     * $$ lay.hasChild( child )
     * @param {Object} child The child component to check.
     * @returns Boolean
     */


    /** ### removeChild
     * Removes a given child from this layout.
     * $$ lay.removeChild( child )
     * @param {Object} child The child control to be remove.
     */


    /** ### setOnTouch
     * Adds a callback handler when the layout is touch.
     * $$ lay.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setOnLongTouch
     * Adds a callback handler when the layout is long touch. The touch timer is about 500 milliseconds.
     * $$ lay.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### clear
     * Clear the content of the layout.
     * $$ lay.clear() $$
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Main layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a callback hanlder when the layout is touched
        this.main.setOnTouch( this.onTouch )

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Button", "primary")

        // Add a callback handler when the button is touched
        this.btn.setOnTouch( this.btnTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click the layout!" )
    }

    btnTouch()
    {
        if(this.main.backColor == "yellow")
        {
            this.main.backColor = "white"
        }  
        else
        {
            this.main.backColor = "yellow"
        }
    }
}
 */


/**
@sample Bottom aligned with margins
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout with objects aligned at the bottom
        this.main = ui.addLayout("main", "Linear", "Bottom,FillXY")

        // Set margins for children controls
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add buttons to the main layout
        this.btn1 = ui.addButton( this.main, "Button 1", "Primary" )
        this.btn2 = ui.addButton( this.main, "Button 2", "Secondary" )
        this.btn3 = ui.addButton( this.main, "Button 3", "Primary,Outlined" )
    }
}
 */


/**
@sample Orientation and spacing
class Main extends App
{
    onStart()
    {
        // Create a fullscreen main layout with objects centered horizontally
        this.main = ui.addLayout("main", "Linear", "VCenter,Horizontal", 1, 1)

        // Set the children spacing
        this.main.childSpacing = "even"

        // Add buttons to the main layout.
        this.btn1 = ui.addButton(this.main, "Button 1", "Primary")
        this.btn2 = ui.addButton(this.main, "Button 2", "Secondary")
        this.btn3 = ui.addButton(this.main, "Button 3", "Primary,Outlined")
    }
}
 */


/**
@sample Slide Layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen slide layout with objects vertically centered
        // You can pass `Vertical` option to make a vertical slide
        this.main = ui.addLayout( "main", "Slide", "VCenter,FillXY" )
        
        // Adds an onSlide event handler to the layout
        this.main.setOnSlide( this.onSlide )

        // Adds a yellow-colored Linear first layout to the slide
        var lay1 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay1.backColor = "yellow"
        ui.addText(lay1, "First Page")

        // Adds a green-colored Linear second layout to the slide
        var lay2 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay2.backColor = "green"
        ui.addText(lay2, "Second Page")

        // Adds a red-colored Linear third layout to the slide
        var lay3 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay3.backColor = "red"
        ui.addText(lay3, "Third Page")

        // Adds a blue-colored Linear fourth layout to the slide
        var lay4 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay4.backColor = "blue"
        ui.addText(lay4, "Fourth Page")

        ui.showPopup("Swipe horizontally", "Long");
    }

    onSlide( ctrl, index ) {
        ui.showPopup( index, "", 350 );
    }
}
 */


/**
@sample Player control using Card layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Create a layout of type card
        this.crd = ui.addLayout(this.main, "Card", "Horiz", 0.9, 0.2);
        this.crd.cornerRadius = 12;
        this.crd.elevation = 8;

        // Clear the default padding of the card
        this.crd.padding = 0;

        // Add a layout at the left of the card
        var lay1 = ui.addLayout(this.crd, "Linear", "Left", 0.6, 1);
        lay1.padding = ["1rem", "1rem", "1rem"];

        // Add a text which is slightly bigger to serve as a song title
        var title = ui.addText(lay1, "100 Years", "H5");

        // Add a subheader text for artist
        var subheader = ui.addText(lay1, "Five For Fighting", "textSecondary")

        // Create a layout for the the player actions
        var actionsLay = ui.addLayout(lay1, "Linear", "Horiz,VCenter,Left,FillAxis", 1);

        // Add a previous icon button to the actions layout
        var prevBtn = ui.addButton(actionsLay, "fast_rewind", "Small,Icon");

        // Add a play icon button to the actions layout
        var playBtn = ui.addButton(actionsLay, "play_arrow", "Icon,Large");
        playBtn.margins = ["1rem", 0, "1rem", 0];
        
        // Add a next icon button to the actions layout
        var nextBtn = ui.addButton(actionsLay, "fast_forward", "Small,Icon");

        // Create another layout and add it to the card
        var lay2 = ui.addLayout(this.crd, "Linear", "", 0.4, 1);

        // Add a cover image to the right layout of the card
        var img = ui.addImage(lay2, "https://picsum.photos/200/200", "", 1, 1);
    }
}
 */


/**
@sample Python Main layout
from hybrid import ui

def OnStart():
    global main
    # Create a fullscreen linear layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add a callback hanlder when the layout is touched
    main.setOnTouch(onTouch)

    # Add a button control to the main layout
    btn = ui.addButton(main, "Button", "primary")

    # Add a callback handler when the button is touched
    btn.setOnTouch(btnTouch)

def onTouch(event):
    ui.showPopup("You click the layout!")

def btnTouch(event):
    if main.backColor == "yellow":
        main.backColor = "white"
    else:
        main.backColor = "yellow"
 */


/**
@sample Python Bottom aligned with margins
from hybrid import ui

def OnStart():
    # Creates a fullscreen main layout with objects aligned at the bottom
    main = ui.addLayout("main", "Linear", "Bottom,FillXY")

    # Set margins for children controls
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add buttons to the main layout
    btn1 = ui.addButton(main, "Button 1", "Primary")
    btn2 = ui.addButton(main, "Button 2", "Secondary")
    btn3 = ui.addButton(main, "Button 3", "Primary,Outlined")
 */


/**
@sample Python Orientation and spacing
from hybrid import ui

def OnStart():
    # Create a fullscreen main layout with objects centered horizontally
    main = ui.addLayout("main", "Linear", "VCenter,Horizontal", 1, 1)

    # Set the children spacing
    main.childSpacing = "even"

    # Add buttons to the main layout.
    btn1 = ui.addButton(main, "Button 1", "Primary")
    btn2 = ui.addButton(main, "Button 2", "Secondary")
    btn3 = ui.addButton(main, "Button 3", "Primary,Outlined")
 */


/**
@sample Python Slide Layout
from hybrid import ui

def OnStart():
    # Create a fullscreen slide layout with objects vertically centered
    # You can pass `Vertical` option to make a vertical slide
    main = ui.addLayout("main", "Slide", "VCenter,FillXY")

    # Adds an onSlide event handler to the layout
    main.setOnSlide(onSlide)

    # Adds a yellow-colored Linear first layout to the slide
    lay1 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay1.backColor = "yellow"
    ui.addText(lay1, "First Page")

    # Adds a green-colored Linear second layout to the slide
    lay2 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay2.backColor = "green"
    ui.addText(lay2, "Second Page")

    # Adds a red-colored Linear third layout to the slide
    lay3 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay3.backColor = "red"
    ui.addText(lay3, "Third Page")

    # Adds a blue-colored Linear fourth layout to the slide
    lay4 = ui.addLayout(main, "Linear", "VCenter", 0.8, 0.5)
    lay4.backColor = "blue"
    ui.addText(lay4, "Fourth Page")

    ui.showPopup("Swipe horizontally", "Long");

def onSlide(ctrl, index):
    ui.showPopup(index, "", 350)
 */


