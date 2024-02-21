
/** # Layout
 * @abbrev lay
 * Adds a layout into your app.
 * @jdocs A layout is the basic ui component of an app. It is where you add other ui components such as buttons, textfields, checkboxes, list, images and many more. To add a layout, simply call the `addLayout` method of the `ui` object.
 * $$ lay = ui.addLayout(parent, type, options, width, height) $$
 * @param {Object} parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
 * @param {String} type The layout type. Values can be `"Linear"`, `"Absolute"`, `"Frame"`, `"Slide"`, `"Card"`
 * @param {String} options A comma separated options.\nOrientation: `Horizontal`, `Vertical`\nHorizontal Alignment: `Left`, `Center`, `Right`\nVertical Alignment: `Top`, `VCenter`, `Bottom`\nDimensions: `FillXY`, `FillX`, `FillY`, `FillAxis`\nScroll: `ScrollX`, `ScrollY`, `ScrollXY`, `NoScrollBar`\nUtils:\n`BackColor` to apply theme background color rather than transparent.\n`NoScrollBar` to remove scrollbar when scroll options is passed.\n`TouchThrough` to enable touch events to propagate behind the layers in frame layouts.\n`"Touchable"` enable touch in card layout.\n`"Outlined"` card variant is outlined.\n`"Square"` card rounded corners is remove.
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Layout
 * 
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

ui.addLayout = function(parent, type="Linear", options="", width, height)
{
    let opt = options.toLowerCase();
    if( opt.includes("fillxy") || parent === "main" ) {
        width = width==null ? 1:width;
        height = height==null ? 1:height;
    } else if( opt.includes("filly") ) {
        height = height==null ? 1:height;
    } else if( opt.includes("fillx") ) {
        width = width==null ? 1:width;
    }
    if(opt.includes("nodom") || parent == null) {
        width = width || 1;
        height = height || 1;
    }
    return new ui.Layout(parent, type, opt, width, height);
}

ui.Layout = class extends ui.Control
{
	constructor(parent, type, options="top,left", width, height)
	{
        super(parent=="main"?_root():parent, width, height, options, "Layout")
	    
        // should be added directly into `index.html` css.
        if(_root() == this._parent) this._parent.style.position = "relative"
		
	    this._type = type.toLowerCase().trim()
        this._childMargins = { left:0, top:0, right:0, bottom:0 }
		this._children = []
        this._div2 = null

        // variables for Slide layout / swipeable-views
        this._currIndex = this._type == "slide" ? 0 : null
        this._sldStyles = {}

        // Add background color relative to backgroud-color of the body.
        if( this._options.includes("backcolor") ) this._div.classList.add("backColor")
		
		// Add the HTML Element
        this._render()

        if(this._type == "absolute") _res_obs_.observe( this._div )
	}
	
	//--- INVISIBLE METHODS --------------------------
    
    _initProps() { this._render(); }

    // Works for abosolute layouts only
    _resize() {
        if(this._type == "absolute" && this._parent) {
            var div = this._parent._div || this._parent;
            const rect = div.getBoundingClientRect();
            this._div2.style.width = typeof this._width == "string" ? this._width : (rect.width*this._width+"px");
            this._div2.style.height = typeof this._height == "string" ? this._height : (rect.height*this._height+"px");
        }
    }

    // context menu
    _onContextMenu( event ) {
        event.preventDefault();
        if( (this._ctxMenu || this._longTouch ) && (event.target == this._div || event.target == this._div2) ) {
            if( this._ctxMenu ) this._ctxMenu( this._getEventObject(event, null, null, "contextmenu") );
        }
	}

    _getRef( el ) {
        if( el ) this._cardEl = el;
    }

    _render()
    {
        let horiz = this._options.includes( "horiz" );
        if(this._type == "frame") this._div.style.position = "relative";
        else if(this._type == "slide") {
            this._initSlideStyles();
            this._renderSwipe();
        }
        else if(this._type == "absolute") {
            glob._abs_lay.push( this );
            this._div2 = document.createElement( "div" );
            this._div2.style.position = "relative";
            this._div2.setAttribute( "parent-layout", "abs" );
            this._div2.classList.add( "abs-lay" );
            this._resize();
            this._div.appendChild( this._div2 );
            this._div2.oncontextmenu = this._onContextMenu.bind( this )
        }
        else if(this._type == "linear") {
            // display as flexbox
            this._div.style.display = "inline-flex";
            this._div.style.flexDirection = horiz ? "row" : "column";
            // render scroll
            if( this._options.includes( "scrollxy" ) && this._width && this._height ) this._div.style.overflow = "auto"
            else if(this._options.includes("scrolly") && (this._height || this._options.includes("filla"))) this._div.style.overflowY = "auto"
            else if(this._options.includes("scrollx") && (this._width || this._options.includes("filla"))) this._div.style.overflowX = "auto"
            if( this._options.includes("noscrollbar") ) { this._div.classList.add("no-scroll-bar") }
            // add contextmenu
            this._div.oncontextmenu = this._onContextMenu.bind( this )
        }
        
        // Set horizontal and vertical alignment of children.
        if(horiz && this._type === "linear") {
            this._div.style.justifyContent = this._options.includes("left") ? "flex-start" : (this._options.includes("right") ? "flex-end" : "center");
            this._div.style.alignItems = this._options.includes("vcenter") ? "center" : (this._options.includes("bottom") ? "flex-end" : "flex-start");
        }
        else if(this._type === "linear") {
            this._div.style.flexDirection = "column";
            this._div.style.justifyContent = this._options.includes("vcenter") ? "center" : (this._options.includes("bottom") ? "flex-end" : "flex-start" );
            this._div.style.alignItems = this._options.includes("left") ? "flex-start" : (this._options.includes("right") ? "flex-end" : "center");
        }

        // occupy available space
        if( this._options.includes("filla") ) {
            this._div.style.flex = 1;
            if(this._div.style.height == "fit-content" && !horiz) this._div.style.height = null;
            if(this._div.style.width == "fit-content" && horiz) this._div.style.width = null;
        }

        else if(this._type == "card") {
            this._cardOpt = {
                variant: this._options.includes("outline") ? "outlined" : "elevation",
                square: this._options.includes("square")
            };
            this._cardStyle = {
                display: "flex",
                padding: 0
            };
            if( this._options.includes("horiz") ) {
                this._cardStyle.justifyContent = this._options.includes("left") ? "flex-start" : (this._options.includes("right") ? "flex-end" : "center");
                this._cardStyle.alignItems = this._options.includes("vcenter") ? "center" : (this._options.includes("bottom") ? "flex-end" : "flex-start");
            }
            else {
                this._cardStyle.flexDirection = "column";
                this._cardStyle.justifyContent = this._options.includes("vcenter") ? "center" : (this._options.includes("bottom") ? "flex-end" : "flex-start" );
                this._cardStyle.alignItems = this._options.includes("left") ? "flex-start" : (this._options.includes("right") ? "flex-end" : "center");
            }
            this._cardEl = null;
            this._renderCard();
        }

        // fonts
        if( this._fontFile ) this._setFontName();
    }

    _cardClick( e ) {
        if( this._touch ) this._touch(this._getEventObject(e, null, null, "touch"));
    }
    _renderCard() {
        let e = React.createElement;
        let {Card, CardContent, CardActionArea} = window["MaterialUI"];
        this._ctl = e(Card, {...this._cardOpt, style: {width:"100%", height:"100%"}},
            this._options.includes( "touchable" ) ?
            e(CardActionArea, {onClick:this._cardClick.bind(this), style: {width:"100%", height:"100%"}}, e(CardContent, {style: {width:"100%", height:"100%", ...this._cardStyle}, ref: this._getRef.bind(this)})) :
            e(CardContent, {ref: this._getRef.bind(this), style: {width:"100%", height:"100%", ...this._cardStyle}})
        );
        ReactDOM.render(this._ctl, this._div);
    }

    // initialize slide styles
    _initSlideStyles() {
        this._sldStyles.display = "flex";
        this._sldStyles.width = "100%";
        this._sldStyles.height = "100%";
        this._sldStyles.flexDirection = "row";
        this._sldStyles.justifyContent = this._options.includes("left") ? "flex-start" : (this._options.includes("right") ? "flex-end" : "center");
        this._sldStyles.alignItems = this._options.includes("vcenter") ? "center" : (this._options.includes("bottom") ? "flex-end" : "flex-start")
    }
    // handle slide layout index changes
    _onChangeIndex( i ) {
        if(i < 0 || i >= this._children.length) return;
        this._currIndex = i;
        this._renderSwipe();
        if( this._change ) this._change(this._children[i], i);
    }
    // render swipeable view for Slide layout
    _renderSwipe() {
        const e = React.createElement;
        this._ctl = e(SwipeableViews, {
            onChangeIndex: this._onChangeIndex.bind(this),
            axis: this._options.includes("vertical") ? "y" : "x",
            disabled: this._options.includes("disabled"),
            style: { width: "100%", height: "100%" },
            containerStyle: { width: "100%", height: "100%" },
            slideStyle: { width: "100%", height: "100%", overflow: "hidden" },
            enableMouseEvents: true,
            index: this._currIndex
        }, this._children.map( (_, i) => {
            return e("div", {
                key: i,
                style: { ...this._sldStyles },
                ref: ref => { if(ref) ref.appendChild( this._children[i]._div ) }
            })
        }));
        ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        });
    }

    // Add a child object.
    addChild( obj ) {
        this._children.push( obj );
        // Frame layout
        if(this._type == "frame") {
            let frame = document.createElement("div");
            frame.classList.add("frame-child-wrapper")
            // obj._div.style.position = "absolute";
            frame.appendChild( obj._div );
            this._div.appendChild( frame );
            if( this._options.includes("touchthrough") ) {
                frame.style.pointerEvents = "none";
                obj._div.style.pointerEvents = "auto";
            }
        }
        // Slide Layout / swipeable-views
        else if(this._type == "slide") this._renderSwipe(), obj._div.ontouchend = null;
        else if(this._type == "absolute") this._div2.appendChild( obj._div );
        else if(this._type == "card") this._cardEl.appendChild( obj._div );
        else this._div.appendChild( obj._div );
    }

    // VISIBLE PROPERTIES

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
     */

    // Inherited props
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

    // Inherited methods
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
     * @param {Number} left Left margin. You can also pass string e.g. `12rem`
     * @param {Number} top Top margin. You can also pass string e.g. `12rem`
     * @param {Number} right Right margin. You can also pass string e.g. `12rem`
     * @param {Number} bottom Bottom margin. You can also pass string e.g. `12rem`
     * @param {String} mode Unit of measurement.\n`px` for pixels\n`%` relative to its parent dimension.\n`v` relative to viewport dimension,\n`rem`
     */
    setChildMargins(left, top, right, bottom, mode="")
    {
        if( "absolute,slide".includes(this._type) ) return;
        mode = mode.toLowerCase();
        const l = _W(mode ? left+mode : left), t = _H(mode ? top+mode : top), r = _W(mode ? right+mode : right), b = _H(mode ? bottom+mode : bottom);
        this._childMargins.left = l;
        this._childMargins.top = t;
        this._childMargins.right = r;
        this._childMargins.bottom = b;
        this._children.map(o => { o.margins = [l, t, r, b]; });
    }

    set childMargins( list ) {
        if( "absolute,slide".includes(this._type) ) return;
        var l=list, t=list, r=list, b=list;
        if(typeof list == "object") l = _W(list[0]), t = _H(list[1]), r = _W(list[2]), b = _H(list[3]);
        this._childMargins.left = l;
        this._childMargins.top = t;
        this._childMargins.right = r;
        this._childMargins.bottom = b;
        this._children.map(o => { o.margins = [l, t, r, b]; });
    }
    
    setOrientation( orient ) { this.orientation = orient }
    set orientation(orient = "vertical") {
        if(this._type != "linear") return
        orient = orient.toLowerCase()
        this._div.style.flexDirection = orient.includes("horiz") ? "row" : "column"
        this._options = this._options.replace(orient.includes("horiz") ? "vertical":"horizontal", orient)
    }
    get orientation() { return this._div.style.flexDirection.includes("row") ? "horizontal" : "vertical" }
    
    setAlignment( val ) { this.alignment = val }
    getAlignment() { return this.alignment }
    set alignment(val = "") {
        if(this._type != "linear") return
        val = val.toLowerCase().trim()
        var horiz = this._div.style.flexDirection.includes( "row" )
        if( horiz ) {
            if(val == "left") this._div.style.justifyContent = "start"
            else if(val == "right") this._div.style.justifyContent = "end"
            else this._div.style.justifyContent = "center"
        }
        else {
            if(val == "left") this._div.style.alignItems = "start"
            else if(val == "right") this._div.style.alignItems = "end"
            else this._div.style.alignItems = "center"
        }
        this._alignment = val
    }
    get alignment() { return this._alignment || "" }

    setVerticalAlignment( val ) { this.verticalAlignment = val }
    getVerticalAlignment() { return this.verticalAlignment }
    set verticalAlignment(val = "") {
        if(this._type != "linear") return
        val = val.toLowerCase().trim()
        var horiz = this._div.style.flexDirection.includes( "row" )
        if( horiz ) {
            if(val == "top") this._div.style.alignItems = "start"
            else if(val == "bottom") this._div.style.alignItems = "end"
            else this._div.style.alignItems = "center"
        }
        else {
            if(val == "top") this._div.style.justifyContent = "flex-start"
            else if(val == "bottom") this._div.style.justifyContent = "flex-end"
            else this._div.style.justifyContent = "center"
        }
        this._verticalAlignment = val
    }
    get verticalAlignment() { return this._verticalAlignment || "" }

    show() {
        if(this.parent._type == "frame") this._div.parentElement.style.display = "inline-flex"
        else this._div.style.display = "inline-flex"
    }

    /** ### goto
     * Transition to the given index.
     * $$ lay.goto( index )
     * @param {Number} index Index of a given layout.
     * @@ Works only for Slide Layouts.
     */
	goto( index ) {
        if(index >= 0 && index < this._children.length) {
            this._currIndex = index
            this._renderSwipe()
        }
	}
    
    getCurrentSlide() { return this._currIndex }

    set currentSlide( index ) {
        if(index >= 0 && index < this._children.length) {
            this._currIndex = index
            this._renderSwipe()
        }
    }
    get currentSlide() { return this._currIndex }
    
    /** ### next
     * Transition to the next slide.
     * $$ lay.next()
     */
    next() {
        if(this._type != "slide" || this._currIndex >= this._children.length-1) return
        this._currIndex += 1, this._renderSwipe()
        this._onChangeIndex( this._currIndex )
    }
    
    /** ### previous
     * Transition to the previous slide.
     * $$ lay.previous()
     */
    previous() {
        if(this._type != "slide" || this._currIndex <= 0) return
        this._currIndex -= 1, this._renderSwipe()
        this._onChangeIndex( this._currIndex )
    }

    /** ### setOnSlide
     * Adds a callback function to be called when slide event is triggered.
     * $$ lay.setOnSlide( callback )
     * @param {Function} callback The function to be called on slide event. ---> @arg {Object} component The control component. @arg {Number} index The index of the slide.
     */
    setOnSlide( callback ) { this._change = callback }

    /** ### getChildOrder
     * Returns the index of the child from the layout children stack in order.
     * $$ lay.getChildOrder( child )
     * @param {Object} child The child component of the layout.
     * @returns Number
     */
    getChildOrder( child ) { return Array.prototype.indexOf.call(this._div.children, child._div) }

    /** ### childToFront
     * Move the child to the front.
     * $$ lay.childToFront( child )
     * @param {Object} child The child object of the layout.
     * @@ Works only for absolute layout.
     */
    childToFront( child ) {
        if( !this.hasChild(child) ) return
        const z = window.getComputedStyle(child._div).getPropertyValue("z-index")
        const n = (parseInt(z) + 1).toString()
        child._div.style.zIndex = n
    }

    /** ### hasChild
     * Check whether a component is a child of this layout.
     * $$ lay.hasChild( child )
     * @param {Object} child The child component to check.
     * @returns Boolean
     */
    hasChild( child ) { return Array.prototype.indexOf.call(this._div.children, child._div) >= 0 }

    /** ### removeChild
     * Removes a given child from this layout.
     * $$ lay.removeChild( child )
     * @param {Object} child The child control to be remove.
     */
    removeChild( child ) {
        if( !this.hasChild(child) ) return
        const x = Array.prototype.indexOf.call(this._div.children, child._div)
        this._div.removeChild( this._div.children[x] )
    }

    setChildSpacing(val = "") { this.childSpacing = val }
    getChildSpacing() { return this.childSpacing }
    set childSpacing(val = "") {
        if(this._type !== "linear") return
        val = val.toLowerCase().trim()
        if( val.includes("even") ) val = "evenly"
        this._spacing = val, this._div.style.justifyContent = "space-" + this._spacing
    }
    get childSpacing() { return this._spacing }

    // override
    set width( width ) {
        this._width = _W(width)
        this._div.style.width = this._width
        if(this._type == "absolute") this._resize()
    }
    set height( height ) {
        this._height = _H(height)
        this._div.style.height = this._height
        if(this._type == "absolute") this._resize()
    }

    // Override setOnTouch method to add dynamic event listeners.
    // Do not setOnTouch callback to the layout if parent is of type Slide.

    /** ### setOnTouch
     * Adds a callback handler when the layout is touch.
     * $$ lay.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnTouch( callback ) {
        if( callback ) this._touch = callback;
        let div = this._type == "absolute" ? this._div2 : this._div;
        div.onclick = platform.ios ? null: this._onTouch;
        div.ontouchend = platform.ios ? this._onTouch : null;
        div.oncontextmenu = this._onContextMenu.bind( this );
    }

    /** ### setOnLongTouch
     * Adds a callback handler when the layout is long touch. The touch timer is about 500 milliseconds.
     * $$ lay.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnLongTouch( callback ) {
        this._longTouch = callback;
        let div = this._type == "absolute" ? this._div2 : this._div;
        let event = (platform.ios || platform.android) ? "touchstart" : "mousedown";
        this.setOnTouch();
        div.addEventListener(event, e => {
            if(e.target == div) {
                if(e.button && e.button != 0) return;
                this._touchTimeout = setTimeout( this._longTouch.bind(this, this._getEventObject(e, null, null, "longtouch")), this._touchTimer);
            }
        });
    }

    /** ### clear
     * Clear the content of the layout.
     * $$ lay.clear() $$
     */
    clear() {
        if(this._type == "absolute") this._div2.innerHTML = "";
        else this._div.innerHTML = "";
        this._children = [];
    }

    get children() { return this._children; }

    set padding( val ) {
        if(this._type == "card") {
            let el = this._div.querySelector(".MuiCardContent-root");
            if( el ){
                if(typeof val == "object" && val.length) _padding(el, this, ...val);
                else if(typeof val == "number" || typeof val == "string") _padding(el, this, val, val, val, val);
            }
        }
        else if(this._type == "absolute") {
            if(typeof val == "object" && val.length) _padding(this._div2, this, ...val);
            else if(typeof val == "number" || typeof val == "string") _padding(this._div2, this, val, val, val, val);
        }
        else {
            if(typeof val == "object" && val.length) _padding(this._div, this, ...val);
            else if(typeof val == "number" || typeof val == "string") _padding(this._div, this, val, val, val, val);
        }
    }

    set elevation( val ) {
        this._cardOpt.elevation = val;
        this._renderCard();
    }
    get elevation() { return this._cardOpt.elevation; }

    set variant(value = "elevation") {
        value = value.toLowerCase();
        this._cardOpt.variant = value;
        this._renderCard();
    }
    get variant() { return this._cardOpt.variant }

    setCornerRadius(tl, tr, br, bl, mode="px") {
        this._cornerRad = {tl: tl, tr: tr, bl: bl, br: br, mode: mode};
        let el = this._div;
        if(this._type == "card") el = this._div.querySelector(".MuiPaper-root.MuiCard-root");
        el.style.borderTopLeftRadius = isFinite(tl) ? tl+mode : tl;
        el.style.borderTopRightRadius = isFinite(tr) ? tr+mode : tr;
        el.style.borderBottomRightRadius = isFinite(br) ? br+mode : br;
        el.style.borderBottomLeftRadius = isFinite(bl) ? bl+mode : bl;
    }
}

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