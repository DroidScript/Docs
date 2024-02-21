
ui.Control = class 
{ 
    constructor( parent, width, height, options, objType )
    {
        //--- INVISIBLE PROPERTIES ---
		
		this._id = _ids++
		this._div = null;
		this._ctl = null;
		
		this._parent = parent
		this._objType = objType
		this._props = {}
		this.data = {}
		this._docs = {}
        this._style = {}
        this._cls = "";
        this._events = {}
        this._methods = {}
		this._width = width, this._height = height
		this._options = options ? options.toLowerCase() : ""
		this._margins = { left:0, top:0, right:0, bottom:0 }
        this._padding = { left:0, top:0, right:0, bottom:0 }
        this._border = {}
        this._cornerRadius = 0
        this._touchTimeout = null, this._touchTimer = 500;
        // font-file
        this._fontFile = "";
        this._fontName = "";
        if( this._parent && this._parent.fontFile ) {
            this._fontFile = this._parent._fontFile;
            this._fontName = this._parent._fontName;
        }
        else if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
		
		//--- INITIALISATION ---
		
		//Create DIV wrapper and add to parent layout.
        this._div = document.createElement("div")
        this._div.id = "d" + this._id
        this._div.classList.add( "ui"+this._objType )
        this._div.style.width = "fit-content"
        this._div.style.height = "fit-content"
        this._div.style.boxSizing = "border-box"
        this._div.style.flex = "0 0 auto"

        if( this._options.includes("noscrollbar") )
            this._div.classList.add("no-scroll-bar")

        // add fillx/y options
        var horiz = parent?.options?.includes("horiz")
        var linear = parent?._type == "linear"
        if( this._options.includes("fillxy") ) {
            this._div.style.flex = 1
            if( horiz ) {
                this._div.style.width = linear ? null : "100%"
                this._div.style.height = "100%"
            }
            else {
                this._div.style.height = linear ? null : "100%"
                this._div.style.width = "100%"
            }
        }
        else if( this._options.includes("fillx") ) {
            if(horiz && linear) {
                this._div.style.flex = 1
                this._div.style.width = null
            }
            else this._div.style.width = "100%"
        }
        else if( this._options.includes("filly") ) {
            if(!horiz && linear) {
                this._div.style.flex = 1
                this._div.style.height = null
            }
            else this._div.style.height = "100%"
        }

        // prioritize width and height values if provided rather than following fillx/y

        this._div.style.width = _W( width ) || "fit-content"
        this._div.style.height = _H( height ) || "fit-content"

        // Add control to parent (if given)
        if(this._parent != null) {
            if(this._parent._type === "absolute") {
                this._div.style.position = "absolute";
            }
            else if(this._parent._type === "linear" && this._options.includes("filla")) {
                this._div.style.flex = 1;
                let horiz = this._parent._options.includes("horiz");
                this._div.style.flex = 1;
                if(this._div.style.height == "fit-content" && !horiz) this._div.style.height = null;
                if(this._div.style.width == "fit-content" && horiz) this._div.style.width = null;
            }

            if( this._parent._div ) this._parent.addChild( this )
            else this._parent.appendChild( this._div )
                
            if( parent._childMargins )
                this.margins = [
                    parent._childMargins.left,
                    parent._childMargins.top,
                    parent._childMargins.right,
                    parent._childMargins.bottom
                ];
        }
        
        // event handlers
        this.setOnTouch = this.setOnTouch.bind(this)
        this.setOnTouchDown = this.setOnTouchDown.bind(this)
        this.setOnTouchUp = this.setOnTouchUp.bind(this)
        this.setOnDoubleTouch = this.setOnDoubleTouch.bind(this)

        this._onTouch = this._onTouch.bind( this )
        this._onTouchDown = this._onTouchDown.bind( this )
        this._onTouchUp = this._onTouchUp.bind( this )
        this._onDoubleTouch = this._onDoubleTouch.bind( this )

        this.setOptions = this.setOptions.bind( this )
    }
    
    //( Note: You may need to override these methods in your own controls )

    //--- INVISIBLE METHODS ---------

    _initProps() {}
    _initStyle() {}
    
    _onTouch( e )
    {
        if( this._touchTimeout ) clearTimeout( this._touchTimeout );
        if( e.target != e.currentTarget ) return;
        if( e.detail == 2 && this._doubleTouch ) this._doubleTouch(e, null, null, "dbltouch");
        else if( this._touch ) this._touch( this._getEventObject(e, null, null, "touch") );
        e.stopPropagation();
    }
    _onTouchDown( e )
    {
        if( e.target != e.currentTarget ) return
        if(this._touchDown) this._touchDown( this._getEventObject(e, null, null, "touchdown") )
        e.stopPropagation()
    }
    _onTouchUp( e )
    {
        if( e.target != e.currentTarget ) return
        if(this._touchUp) this._touchUp( this._getEventObject(e, null, null, "touchup") )
        e.stopPropagation()
    }
    _onDoubleTouch( e )
    {
        if( e.target != e.currentTarget ) return
        if( this._doubleTouch ) this._doubleTouch( this._getEventObject(e, null, null, "dbltouch") )
        e.stopPropagation()
    }

    _onContextMenu( event )
	{
        if(this._ctxMenu || this._longTouch) {
            if( this._ctxMenu ) this._ctxMenu( this._getEventObject(event, null, null, "contextmenu") );
            var e = event || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false
        }
	}
    _setFontName() {
        let els = this._div.querySelectorAll('*:not(:empty):not(.material-icons)');
        if( this._fontName ) els.forEach( m => m.style.fontFamily = this._fontName );
        else els.forEach( m => m.style.removeProperty("font-family") );
    }

    _getEventObject(event, touch, ctl, type) {
        ctl = ctl || this._div;
        let e = event;
        // react event
        if( e.nativeEvent ) e = event.nativeEvent;
        // native event touch
        if(touch === true || (e.changedTouches && e.changedTouches.length) ) e = e.changedTouches[0]
        // native event click
        return {
            x: e.clientX - ctl.offsetLeft,
            y: e.clientY - ctl.offsetTop,
            left: e.clientX,
            top: e.clientY,
            type: type || e.type
        }
    }

    // VISIBLE PROPERTIES
    /**
     * @prop {Number} width Sets or returns the width of the control as a fraction of the parent control.
     * @prop {Number} height Sets or returns the height of the control as a fraction of the parent control.
     * @prop {Number} opacity Sets or returns the opacity of the control.
     * @prop {Number} textSize Sets or returns the size of the text within the control.
     * @prop {String} textColor Sets or returns the color of the text.
     * @prop {Number} rotation Sets or returns the angle of rotation in degrees.
     * @prop {String} fontFile Sets or returns the `relative` path to the font-family use.
     * @prop {String} visibility Sets or returns the visibility of the control.
     * @prop {String} type Returns the type of the control.
     * @prop {Number} absWidth Returns the absolute width of the control in pixels.
     * @prop {Number} absHeight Returns the absolute height of the control in pixels.
     * @prop {String} backColor A hexadecimal color of the form `#rrggbb`
     * @prop {String} backImage The path to your image file.
     * @prop {Boolean} isVisible Returns whether the control is visible or not.
     * @prop {Number} top Returns the distance of the control from the top.
     * @prop {Number} left Returns the distance of the control from the left.
     * @prop {Number} absTop Returns the absolute distance of the control from the top in pixels.
     * @prop {Number} absLeft Returns the absolute distance of the control from the left in pixels.
     * @prop {Object} parent Returns the parent layout control.
     * @prop {Object} position Returns the position of the control. The returned object has `left` `top` `right` and `bottom` props.
     * @prop {Array} margins Sets or returns the margin of the control. Works on controls with `Linear` parent only. You can also pass a number to set equal margins for all sides.
     * @prop {Array} padding Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
     * @prop {String} options Sets or returns the `options` of the control.
     * @prop {Boolean} disabled Sets or returns the `disabled` state of the control.
     * @prop {Number} border Sets or returns the border thickness in pixels.
     * @prop {String} borderColor Sets or returns the border color. Color is in hexadecimal form `#rrggbb`
     * @prop {String} borderStyle Sets or returns the border style. Values can be `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` and `outset`. Default is `solid`.
     * @prop {Number} cornerRadius Sets or returns the corner radius in pixels.
     * @prop {Object} el Returns the html container element for the control.
     * @prop {String} elStyle Sets the style of the html container element.
     */
    
    // --- VISIBLE METHODS --------
	
	setOnTouch( cb ) { if( cb ) this._touch = cb; }
    setOnTouchDown( callback ) { this._touchDown = callback }
    setOnTouchUp( cb ) { this._touchUp = cb }
    setOnDoubleTouch( cb ) { this._doubleTouch = cb }

    /** ### setOnContextMenu
     * @name setOnContextMenu
     * Adds a callback function on right click.
     * $$ setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {Object} event The pointer event object.
     */
    setOnContextMenu( callback ) { this._ctxMenu = callback }

    /** ### animate
     * @name animate
     * Animate the component.
     * $$ cname.animate(anim, duration) $$
     * @param {String} anim The type of animation. Here are the available values\n`bounce`, `flash`, `pulse`, `rubberBand`, `shakeX`, `shakeY`, `headShake`, `swing`, `tada`, `wobble`, `jello`, `heartBeat`,\nBack Entrances: `backInDown`, `backInLeft`, `backInRight`, `backInUp`\nBack Exits: `backOutDown`, `backOutLeft`, `backOutRight`, `backOutUp`\nBouncing Entrances: `bounceIn`, `bounceInDown`, `bounceInLeft`, `bounceInRight`, `bounceInUp`\nBouncing exits: `bounceOut`, `bounceOutDown`, `bounceOutLeft`, `bounceOutRight`, `bounceOutUp`\nFading entrances: `fadeIn`, `fadeInDown`, `fadeInDownBig`, `fadeInLeft`, `fadeInLeftBig`, `fadeInRight`, `fadeInRightBig`, `fadeInUp`, `fadeInUpBig`, `fadeInTopLeft`, `fadeInTopRight`, `fadeInBottomLeft`, `fadeInBottomRight`\nFading exits: `fadeOut`, `fadeOutDown`, `fadeOutDownBig`, `fadeOutLeft`, `fadeOutLeftBig`, `fadeOutRight`, `fadeOutRightBig`, `fadeOutUp`, `fadeOutUpBig`, `fadeOutTopLeft`, `fadeOutTopRight`, `fadeOutBottomRight`, `fadeOutBottomLeft`\nFlippers: `flip`, `flipInX`, `flipInY`, `flipOutX`, `flipOutY`\nLightspeed: `lightSpeedInRight`, `lightSpeedInLeft`, `lightSpeedOutRight`, `lightSpeedOutLeft`\nRotating Entrances: `rotateIn`, `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight`\nRotating Exits: `rotateOut`, `rotateOutDownLeft`, `rotateOutDownRight`, `rotateOutUpLeft`, `rotateOutUpRight`\nSpecials: `hinge`, `jackInTheBox`, `rollIn`, `rollOut`\nZooming Entrances: `zoomIn`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInUp`\nZooming Exits: `zoomOut`, `zoomOutDown`, `zoomOutLeft`, `zoomOutRight`, `zoomOutUp`\nSliding Entrances: `slideInDown`, `slideInLeft`, `slideInRight`, `slideInUp`\nSliding Exits: `slideOutDown`, `slideOutLeft`, `slideOutRight`, `slideOutUp` 
     * @param {Number} duration The time in milliseconds.
     */
    animate( anim, duration, exit ) {
        if(duration) {
            this._div.style.setProperty('--animate-duration', (duration/1000)+'s');
        }
        this._anim = anim;
        this._div.className = this._div.className.replace(/(?:^|\s)animate__\S*/g, '');
        this._div.classList.add('animate__animated', 'animate__' + this._anim);
        this._div.addEventListener('animationend', (e) => {
            e.stopPropagation();
            this._div.classList.remove("animate__animated", "animate__"+this._anim);
            this._div.style.removeProperty("--animate-duration");
            if( exit == true || this._anim.toLowerCase().includes("out") ) {
                this.hide();
            }
        })
        this.show();
    }
    
    /** ### setSize
     * @name setSize
     * Sets the size of the component.
     * $$ cname.setSize(width, height, mode)
     * @param {Number} width Fraction of the parent width. [0-1]
     * @param {Number} height Fraction of the parent height. [0-1]
     * @param {String} mode Unit of measurment. Can be "px", "rem", "%", "v" for viewport width/height or any css supported unit.
     */
	setSize(width, height, mode="") {
        this.width = mode ? width+mode : width
        this.height = mode ? height+mode : height
    }
	setWidth(width, mode="") { this.width = mode ? width+mode : width }
    set width( width ) {
        this._width = _W( width )
        this._div.style.width = this._width
    }
    get width() { return this._width }

    setHeight(height, mode) { this.height = mode ? height+mode : height }
    set height( height ) {
        this._height = _H( height )
        this._div.style.height = this._height
    }
    get height() { return this._height }

    setOpacity( fraction ) { this.opacity = fraction }
    set opacity( fraction ) { this._div.style.opacity = fraction }
    get opacity() { return this._div.style.opacity }
    
    set fontFile( file ) {
        if(typeof(file) != "string") return;
        this._fontFile = file.trim();
        if( this._fontFile ) {
            this._fontName = file.split('/').pop().split('.')[0] + this._id;
            const style = document.createElement('style');
            style.innerText = '@font-face {' +
                'font-family: \''+ this._fontName +'\'; ' +
                'src: url(\''+file+'\'); '+
            '}';
            document.head.appendChild(style);
        } else
            this._fontName = "";
        this._setFontName();
    }
    get fontFile() { return this._fontFile ? this._fontFile : null }
    setFontFile( file ) { this.fontFile = file; }

    setTextSize( size ) { this._div.style.fontSize = size; this._render() }
    getTextSize() { return this._div.style.fontSize }
    set textSize( size ) { this._div.style.fontSize = size; this._render() }
    get textSize() { return this._div.style.fontSize }

    setTextColor( clr ) { this._div.style.color = clr; this._render() }
    set textColor( clr ) { this._div.style.color = clr; this._render() }
    get textColor() { return this._div.style.color }

    setRotation( degree ) { this._div.style.transform = 'rotate('+degree+'deg)' }
    set rotation( degree ) {
        this._div.style.transform = 'rotate('+degree+'deg)';
    }
    get rotation() {
        var deg = this._div.style.transform.replace("rotate(","").replace("deg)","")
        return parseInt(deg)
    }

    /** ### show
     * @name show
     * Show the component.
     * $$ cname.show()
     */
    show() {
        if(this._parent._type == "frame") this._div.parentElement.style.display = "block"
        else this._div.style.display = "block"
    }

    /** ### hide
     * @name hide
     * Hide the component. 
     * $$ cname.hide()
     */
    hide() {
        if(this._parent._type == "frame") this._div.parentElement.style.display = "none"
        else this._div.style.display = "none"
    }

    /** ### gone
     * @name gone
     * Destroy the component.
     * $$ cname.gone()
     */
    gone() { this.destroy() }

    setVisibility( mode )
    {
        if( !mode ) return
        mode = mode.toLowerCase().trim()
        if(mode == 'show') this.show()
        else if(mode == 'hide') this.hide()
        else this.destroy()
    }
    set visibility( mode ) {
        if( !mode ) return
        mode = mode.toLowerCase().trim()
        if(mode == 'show') this.show()
        else if(mode == 'hide') this.hide()
        else this.destroy()
    }
    getVisibility() {
        var ret = 'show'
        if( !this._div ) ret = 'gone'
        else ret = this._div.style.display == 'block' ? 'show' : 'hide'
        return ret
    }
    get visibility() {
        var ret = 'show'
        if( !this._div ) ret = 'gone'
        else ret = this._div.style.display != 'none' ? 'show' : 'hide';
        return ret
    }

    /** ### destroy
     * @name destroy
     * Destroy the component.
     * $$ cname.destroy()
     */
    destroy() { this._div.remove() }

    /** ### setScale
     * @name setScale
     * Sets the x and y scaling of the component. This will ignore the positioning and flow of controls in the layout.
     * $$ cname.setScale(x, y)
     * @param {Number} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
     * @param {Number} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
     */
    setScale( x, y )
    {
        x = isNaN(x) ? 1:x
        y = isNaN(y) ? 1:y
        this._div.style.transform = 'scale('+x+','+y+')'
    }

    getType() { return this._objType }
    get type() { return this._objType }

    getWidth() { return this._width }
    getHeight() { return this._height }

    getAbsWidth() { return this._div.offsetWidth }
    getAbsHeight() { return this._div.offsetHeight }

    get absWidth() { return this._div.offsetWidth }
    get absHeight() { return this._div.offsetHeight }
    
    setBackColor( clr ) { this._div.style.backgroundColor = clr }

    set backColor( clr ) { this._div.style.backgroundColor = clr }
    get backColor() { return this._div.style.backgroundColor }

    setBackImage( img ) {
        this._backImageUrl = img;
        this._div.style.backgroundImage = `url('`+img+`')`;
        this._div.style.backgroundSize = "cover";
        this._style.backgroundPosition = "center";
        this._style.backgroundRepeat = "no-repeat";
    }
    
    set backImage( img ) {
        this._backImageUrl = img;
        this._div.style.backgroundImage = `url('`+img+`')`;
        this._div.style.backgroundSize = "cover";
        this._div.style.backgroundPosition = "center";
        this._div.style.backgroundRepeat = "no-repeat";
    }
    get backImage() { return this._backImageUrl || ""; }

    isVisible() { return this._div.style.display !== 'none'; }
    get isVisible() { return this._div.style.display !== 'none'; }

    getTop() { return this._div.offsetTop / window.innerHeight }
    get top() { return this._div.offsetTop / window.innerHeight }

    getLeft() { return this._div.offsetLeft / window.innerWidth }
    get left() { return this._div.offsetLeft / window.innerWidth }

    getAbsTop() { return this._div.offsetTop } // exact value  this._div.getBoundingClientRect().top
    get absTop() { return this._div.offsetTop }
    
    getAbsLeft() { return this._div.offsetLeft }  // exact value  this._div.getBoundingClientRect().left
    get absLeft() { return this._div.offsetLeft }
 
    getParent() { return this._parent }
    get parent() { return this._parent }

    /** ### getPosition
     * @name getPosition
     * Returns the position of the component. The return object is of the form `{left, top, right, bottom}`
     * $$ cname.getPosition( options ) $$
     * @param {String} options The mode of the measurements. Values can be `px` or `%`
     * @returns Object
     */
    getPosition( options )
    {
        options = options ? options.toLowerCase() : ''
        var px = options.includes('px')
        var rec = this._div.getBoundingClientRect()
        return {
            left: px ? rec.left : rec.left/window.innerWidth,
            top: px ? rec.top : rec.top/window.innerHeight,
            right: px ? window.innerWidth-(rec.left + rec.width) : (window.innerWidth-(rec.left + rec.width))/window.innerWidth,
            bottom: px ? window.innerHeight-(rec.top + rec.height) : (window.innerHeight-(rec.top + rec.height))/window.innerHeight
        }
    }

    get position() {
        var rec = this._div.getBoundingClientRect()
        return {
            left: rec.left/window.innerWidth,
            top: rec.top/window.innerHeight,
            right: (window.innerWidth-(rec.left + rec.width))/window.innerWidth,
            bottom: (window.innerHeight-(rec.top + rec.height))/window.innerHeight
        }
    }

    /** ### setMargins
     * @name setMargins
     * Sets the margin of the component.
     * $$ cname.setMargins( left, top, right, bottom, mode ) $$
     * @param {Number} left Left margin. You can also pass string e.g. `12rem`
     * @param {Number} top Top margin. You can also pass string e.g. `12rem`
     * @param {Number} right Right margin. You can also pass string e.g. `12rem`
     * @param {Number} bottom Bottom margin. You can also pass string e.g. `12rem`
     * @param {String} mode Unit of measurement.\n`rem` for root em.\n`px` for pixels\n`%` relative to its parent dimension.\n`v` relative to viewport dimension.
     */
    setMargins(left, top, right, bottom, mode="")
    {
        if( "absolute,slide".includes(this._parent._type) ) return;
        mode =  mode.toLowerCase();
        this._margins.left=left, this._margins.top=top, this._margins.right=right, this._margins.bottom=bottom, this._margins.mode = mode
        this._div.style.marginLeft = _W(left + mode)
        this._div.style.marginTop = _H(top + mode)
        this._div.style.marginRight = _W(right + mode)
        this._div.style.marginBottom = _H(bottom + mode)
    }

    set margins( val ) {
        if( "absolute,slide".includes(this._parent._type) ) return;
        if(typeof val == "object") {
            this._margins.left=val[0], this._margins.top=val[1], this._margins.right=val[2], this._margins.bottom=val[3], this._margins.mode = "";
            this._div.style.marginLeft = _W(val[0])
            this._div.style.marginTop = _H(val[1])
            this._div.style.marginRight = _W(val[2])
            this._div.style.marginBottom = _H(val[3])
        }
        else {
            this._margins.left=val, this._margins.top=val, this._margins.right=val, this._margins.bottom=val
            this._div.style.margin = isFinite(val) ? (val*100)+"%" : val
        }
    }
    get margins() { return this._margins; }

    /** ### setPadding
     * @name setPadding
     * Sets the padding of the component's container.
     * $$ cname.setPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Fraction of the component width.
     * @param {Number} top Fraction of the component height. [0-1]
     * @param {Number} right Fraction of the component width. [0-1]
     * @param {Number} bottom Fraction of the component height. [0-1]
     * @param {String} mode Unit of measurement.\n`rem` for root em.\n`px` for pixels\n`%` relative to its parent dimensions\n`v` relative to viewport dimensions.
     */
    setPadding(left, top, right, bottom, mode) {
        _padding(this._div, this, left, top, right, bottom, mode);
    }

    set padding( val ) {
        if(typeof val == "object" && val.length) _padding(this._div, this, ...val);
        else if(typeof val == "number" || typeof val == "string") _padding(this._div, this, val, val, val, val);
    }
    get padding() { return this._padding; }
    
    /** ### setPosition
     * @name setPosition
     * Sets the position of the component relative to its parent dimensions.
     * $$ cname.setPosition( left, top, mode ) $$
     * @param {Number} left Fraction of the parent width. [0-1]
     * @param {Number} top Fraction of the parent height. [0-1]
     * @param {String} mode Unit of measurement.\n`rem` for root em.\n`px` for pixels\n`%` relative to its parent dimensions\n`v` relative to viewport dimensions.
     */
    setPosition(left, top, mode="") {
        if( this._parent._type == "absolute" || this._parent._type == "frame" ) {
            mode = mode.toLowerCase();
            if(typeof left == "string" || typeof left == "number") this._div.style.left = _W(mode ? left+mode : left)
            if(typeof top == "string" || typeof top == "number") this._div.style.top = _H(mode ? top+mode : top)
        }
    }

    set position( value ) {
        if(this._parent._type == "absolute" || this._parent._type == "frame") {
            if( value[0] ) this._div.style.left = _W(value[0]);
            if( value[1] ) this._div.style.top = _H(value[1]);
        }
    }

    set left( left ) {
        if(this._parent._type == "absolute" || this._parent._type == "frame")
            this._div.style.left = _W( left )
    }

    set top( top ) {
        if(this._parent._type == "absolute" || this._parent._type == "frame")
            this._div.style.top = _H( top );
    }

    setOptions( options )
    {
        this._options = options ? options.toLowerCase() : ""
        this._initProps()
        this._initStyle()
        this._render()
    }
    set options( options ) {
        this._options = options ? options.toLowerCase() : ""
        this._initProps()
        this._initStyle()
        this._render()
    }
    get options() { return this._options }

    /** ### setBorder
     * @name setBorder
     * Sets the border line for the component container.
     * $$ cname.setBorder(left, top, right, bottom, clr, style) $$
     * @param {Number} left Border-left thickness in pixels.
     * @param {Number} top Border-top thickness in pixels.
     * @param {Number} right Border-right thickness in pixels.
     * @param {Number} bottom Border-bottom thickness in pixels.
     * @param {String} clr Border color in hexadecimal format `#rrggbb`.
     * @param {String} style Border-styles. Values can be `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` and `outset`. Default is `solid`
     */
    setBorder(left, top, right, bottom, clr, style="solid")
    {
        style = style.toLowerCase();
        clr = clr || this._div.style.borderColor || "#000"
        this._div.style.border = "0px " + style + " " + clr;
        this._div.style.borderLeftWidth = left + "px";
        this._div.style.borderTopWidth = top + "px";
        this._div.style.borderRightWidth = right + "px";
        this._div.style.borderBottomWidth = bottom + "px";
    }
    set border( val ) {
        this._border.width = val
        this._div.style.borderWidth = val + "px"
        if( !this._border.style ) this.borderStyle = "solid"
    }
    get border() { return this._border.width }

    setBorderColor( color ) { this.borderColor = color }
    set borderColor( color ) {
        this._border.color = color
        this._div.style.borderColor = color
    }
    get borderColor() { return this._border.color }

    setBorderStyle( style ) { this.borderStyle = style }
    set borderStyle(style = "solid") {
        this._border.style = style.toLowerCase()
        this._div.style.borderStyle = this._border.style
    }
    get borderStyle() { return this._border.style }
	
    /** ### setCornerRadius
     * @name setCornerRadius
     * Sets the corner radius of the component.
     * $$ cname.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} tl Top-Left border radius.
     * @param {Number} tr Top-Right border radius.
     * @param {Number} br Bottom-Right border radius.
     * @param {Number} bl Bottom-Left border radius.
     * @param {String} mode Unit of measurement. Values are `px` `rem` or `%`.
     */
    setCornerRadius(tl, tr, br, bl, mode="px") {
        this._cornerRad = {tl: tl, tr: tr, bl: bl, br: br, mode: mode};
        this._div.style.borderTopLeftRadius = isFinite(tl) ? tl+mode : tl;
        this._div.style.borderTopRightRadius = isFinite(tr) ? tr+mode : tr;
        this._div.style.borderBottomRightRadius = isFinite(br) ? br+mode : br;
        this._div.style.borderBottomLeftRadius = isFinite(bl) ? bl+mode : bl;
    }
    set cornerRadius( val ) {
        if(typeof val == "object" && val.length) this.setCornerRadius( ...val );
        else this.setCornerRadius(val, val, val, val);
    }
    get cornerRadius() { return this._cornerRad; }
    
    setEnabled( enable ) { this._props.disabled=!enable; this._render() }

    set disabled( value ) { this._props.disabled = value; this._render() }
    get disabled() { return this._props.disabled }

    /** ### bringForward
     * @aname bringForward
     * Bring this component forward by a given z-index.
     * $$ cname.bringForward( zIndex )
     * @param {Number} zIndex The z-index. A negative value behaves like `sendBackward` method.
     */
    bringForward( zIndex ) { this._div.style.zIndex += ( zIndex || 1 ) }

    /** ### sendBackward
     * @name sendBackward
     * Bring this component backward by a given z-index.
     * $$ cname.bringForward( zIndex )
     * @param {Number} zIndex The z-index. A positve value behaves like `bringForward` method.
     */
    sendBackward( zIndex ) { this._div.style.zIndex -= (zIndex || 1) }

    get el() { return this._div; }
    
    set elStyle(style = "") { this._div.style = style; }
}

