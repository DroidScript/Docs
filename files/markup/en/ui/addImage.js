
/** # Image
 * @abbrev img
 * Adds an image into your layout.
 * @jdocs Images serve to visually enhance applications, displaying graphics or photos. Add an image into your app using the `addImage` method like this:
 * $$ img = ui.addImage(parent, file, options, width, height)  $$
 * @param {Object} parent The parent layout where to add the image.
 * @param {String} file The path to the image.
 * @param {String} options A comma seprated options.\n`Image`, `Canvas`, `Button` and `Avatar`. Default is image. \nFor `Avatar` you can pass `Small` or `Large`.
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Image.
 * Please note that a `canvas` image cannot switch to Button or Avatar in `setOptions` method.
 */
ui.addImage = function( parent, file, options, width, height ) 
{
    return new ui.Image( parent, file, width, height, options )
}

ui.Image = class extends ui.Control 
{
	constructor( parent, file, width, height, options )
	{
	    super( parent, width, height, options, "Image" )
		this._file = file
		this._img = null
		this._avatar = false
		this._avatarSize = "medium"
		this._canvas = false
		this._ctx = null
		this._w = 0, this._h = 0, this._imgx = 0, this._imgy = 0
		this._imgw, this._imgh;
        this._touchStart = false;
        this._errorIcon = "photo";

		// context variables
        this._ctxFs = "#000"    // fillStyle
        this._ctxSs = "#000"    // strokeStyle
        this._ctxLw = 1			// lineWidth
		this._ctxLc = "square"	// lineCap
		this._ctxLj = ""		// lineJoin
		this._ctxMl = ""		// miterLimit
        this._ctxFont = {
            size: "12px",
            style: "normal",
            family: "Arial",
            weight: ""
        }

        this._initProps()
        this._initStyle();
		this._add()
		this.setOnLoad = this.setOnLoad.bind( this )
	}

	_initProps()
	{
		// let vh = window.innerHeight
		// let vw = window.innerWidth

		// if( typeof(this._width) == "number" && this._width <= 1 ) this._w = Math.round( this._width * vw )
		// else if( typeof(this._width) == "string" && this._width.includes("px") ) this._w = parseInt( this._width.replace("px", "") )
		
		// if( typeof(this._height) == "number" && this._height <= 1 ) this._h = Math.round( this._height * vh )
		// else if( typeof(this._height) == "string" && this._height.includes("px") ) this._h = parseInt( this._height.replace("px", "") )

		if( this._options.includes( "avatar" ) ) this._setAvatar();
		else if( this._options.includes( "canvas" ) ) this._canvas = true
	}

    _initStyle() {}

	_setAvatar() {
		this._avatar = true
		if( this._options.includes("small") ) {
			this._avatarSize = "small"
			this._w = 24, this._h = 24
		}
		else if( this._options.includes("large") ) {
			this._avatarSize = "large"
			this._w = 56, this._h = 56
		}
		else {
			this._avatarSize = "medium"
			this._w = 40, this._h = 40
		}
	}

	_onload() {
		this._loaded = true;
		if( this._load ) this._load();
	}

	_onTouchDown(touch, e) {
		e.stopPropagation();
        this._touchStart = true;
		if( this._options.includes('button') ) this._div.style.transform = 'scale(0.98, 0.98)';
		if(this._touchDown) this._touchDown( this._getEventObject(e, touch, this._ctl, "touchdown") );
        if(e.button && e.button != 0) return;
        if( this._longTouch ) {
            this._touchTimeout = setTimeout( this._longTouch.bind(this, this._getEventObject(e, null, null, "longtouch")), this._touchTimer);
        }
	}
	_onTouchUp(touch, e) {
		e.stopPropagation();
        this._touchStart = false;
        if( this._touchTimeout ) clearTimeout( this._touchTimeout );
        if( this._touchUp ) this._touchUp( this._getEventObject(e, touch, this._ctl, "touchup") );
		if( this._options.includes('button') ) this._div.style.transform = 'scale(1, 1)';
		if( this._touch ) this._touch( this._getEventObject(e, touch, this._ctl, "touch") );
	}
	_onTouchMove(touch, e) {
		e.stopPropagation();
        if( this._touchTimeout ) clearTimeout( this._touchTimeout );
        if( !this._touchStart ) return;
		this._touchMove( this._getEventObject(e, touch, this._ctl, "touchmove") );
	}

	_onDoubleClick( e ) {
        if( this._doubleClick ) this._doubleClick( this._getEventObject(e, touch, this._ctl, "dbltouch") );
    }

	// Added on parent already

	_onContextMenu(event)
	{
		if( (this._ctxMenu || this._longTouch) && event.target == this._ctl )
        {
            if( this._ctxMenu ) this._ctxMenu( this._getEventObject(event, null, null, "contextmenu") );
            var e = event || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false
        }
	}

    _resetCtxStyle() {
        this._ctx.fillStyle = this._ctxFs;
        this._ctx.strokeStyle = this._ctxSs;
        this._ctx.lineWidth = this._ctxLw;
        this._ctx.lineJoin = this._ctxLj;
        this._ctx.lineCap = this._ctxLc;
        this._ctx.miterLimit = this._ctxMl;
    }

	_add() {
		if( this._canvas ) {
			this._ctl = document.createElement("canvas");
			this._ctl.width = this._div.offsetWidth;
			this._ctl.height = this._div.offsetHeight;
            this._ctl.willReadFrequently = true;
			this._ctx = this._ctl.getContext("2d");

            if( this._file ) {
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.onload = () => {
                    this._ctx.drawImage(img, 0, 0, this._ctl.width, this._ctl.height);
                    this._onload();
                };
                img.src = this._file;
            }
		}
		else {
            this._div.style.display = "flex";
            this._div.style.justifyContent = "center";
            this._div.style.alignItems = "center";
            
            this._ctl = document.createElement("img");
            this._ctl.crossOrigin = "anonymous";
            this._ctl.src = this._file
            this._ctl.alt = this._file.split("/").pop();
            this._ctl.onload = this._onload.bind(this);
            this._ctl.style.width = this._avatar ? this._w+"px" : "100%";
            this._ctl.style.height = this._avatar ? this._h+"px" : "100%";

            // error icon
            this._errorIconEl = document.createElement("i");
            this._errorIconEl.classList.add("material-icons");
            this._errorIconEl.style = `font-size:${this._div.offsetWidth*0.4}px; color: ${ui.theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)'}`
            this._div.appendChild(this._errorIconEl);
            this._errorIconEl.style.display = "none";

            this._ctl.onerror = () => {
                this._ctl.style.display = "none";
                this._errorIconEl.innerText = this._errorIcon;
                // this._div.style.backgroundColor = ui.theme.dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
                this._errorIconEl.style.display = "block";
            };
			if( this._avatar ) this._ctl.style.borderRadius = this._w+"px"
		}

        if( this._options.includes("button") ) this._ctl.style.cursor = "pointer"

		this._ctl.oncontextmenu = this._onContextMenu.bind(this)
		
		this._div.appendChild( this._ctl );
        this._div.style.overflow = "hidden";

		this._ctl.onclick = (platform.ios || platform.android) ? null : this._onTouchUp.bind(this, false)
		this._ctl.ontouchend = (platform.ios || platform.android) ? this._onTouchUp.bind(this, true) : null
		this._ctl.onmousedown = (platform.ios || platform.android) ? null : this._onTouchDown.bind(this, false)
		this._ctl.ontouchstart = (platform.ios || platform.android) ? this._onTouchDown.bind(this, true) : null
	}

	_render()
	{
		//
	}

	// VISIBLE PROPERTIES

	/** ## Properties
	 * Here are the available setters and getters for the Image Component.
	 * @prop {Array} pixelData Returns the pixel data of the image.
	 * @prop {String} fillColor Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs.
	 * @prop {String} image Sets or returns the path or url of the image file.
	 * @prop {Number} lineWidth Sets or returns the current line thickness.
	 * @prop {String} lineCap Sets or returns the style of the end caps for a line. Values can be `square` `round` `butt`
	 * @prop {String} lineJoin Sets or returns the type of corner created when two lines meet. Values `bevel` `round` `miter`
	 * @prop {Number} miterLimit Sets or returns the maximum miter length.
	 * @prop {String} strokeColor Sets or returns the current color of the line or stroke.
	 * @prop {String} fill Sets or returns the background color of the canvas.
     * @prop {String} textStyle Sets or returns the text-style for drawing in the canvas. Values are `normal` and `italic`.
     * @prop {Number} textSize Sets or returns the text-size for drawing in the canvas.
     * @prop {String} errorIcon Sets or returns the material icon for error placeholder image.
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

	// VISIBLE METHODS

	/** ## Methods
	 * Here are the available methods of the Image Component.
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

	/** ### enableContextMenu
	 * Enable or disbale the context menu or the right click menus.
	 * $$ img.enableContextMenu( value ) $$
	 * @param {Boolean} value Value. Can be `true` `false`
	 */

	// Refer to parent setOnContextMenu method
	enableContextMenu(value) { this._enabledCtxMenu = value }

	setImage( file ) { this.image = file }

	set image( file ) {
		if( this._canvas ) return;
        if( this._errorIconEl ) {
            this._errorIconEl.style.display = "none";
            this._ctl.style.display = "block";
        }
		this._file = file;
		this._ctl.src = this._file;
	}

	get image() { return this._file; }

	setOptions( opt ) {
		this._options = opt ? opt.toLowerCase() : "";
		if( this._canvas ) return;
		if( this._options.includes("button") ) {
			this._ctl.style.cursor = "pointer";
			this._ctl.style.width = "100%";
			this._ctl.style.height = "100%";
			this._ctl.style.borderRadius = 0;
		}
		else if( this._options.includes("avatar") ) {
			this._setAvatar();
			this._ctl.style.width = this._w+"px";
			this._ctl.style.height = this._h+"px";
			this._ctl.style.borderRadius = this._w+"px";
		}
	}

	/** ### getPixelColor
	 * Get the color of a single pixel in the image. The returned array is of the form `[red, green, blue, alpha]`.
	 * $$ img.getPixelColor( x, y ) $$
	 * @param {Number} x The x-coordinate of the pixel from the left.
	 * @param {Number} y The y-coordinate of the pixel from the top.
     * @param {String} format Pass `"hex"` to return color as hexadecimal formart `"#rrggbb"` or `"hexa"` to include include alpha `"#aarrggbb"` . Pass `"rgb"` to return color as `rgb` format `"rgb(r, g, b)"` or pass `"rgba"` for `"rgba(r, g, b, a)"`.
	 * @returns Array
	 */
	getPixelColor(x, y, format="")
	{
        if(!this._canvas && !this._loaded) {
            console.warn("Image is not yet loaded. Try calling inside the onLoad function.");
            return;
        }
        
		var data = [];
		if( this._canvas ) {
            data = this._ctx.getImageData(x, y, 1, 1).data;
		} else if(this._loaded) {
            const ctl = document.createElement('canvas');
			ctl.width = this._ctl.width;
			ctl.height = this._ctl.height;
			var ctx = ctl.getContext('2d');
			ctx.drawImage(this._ctl, 0, 0, ctl.width, ctl.height);
			data = ctx.getImageData(x, y, 1, 1).data;
        }
        var ret = [...data];
        format = format.toLowerCase().trim();
        if(format == "hex") {
            ret = "#"+ret[0].toString(16).padStart(2,"0")+ret[1].toString(16).padStart(2,"0")+ret[2].toString(16).padStart(2,"0");
        }
        else if(format == "hexa") {
            ret = "#"+ret[3].toString(16).padStart(2,"0")+ret[0].toString(16).padStart(2,"0")+ret[1].toString(16).padStart(2,"0")+ret[2].toString(16).padStart(2,"0");
        }
        else if(format == "rgb") {
            ret = `rgb(${ret[0]}, ${ret[1]}, ${ret[2]})`
        }
        else if(format == "rgba") {
            ret = `rgb(${ret[0]}, ${ret[1]}, ${ret[2]}, ${ret[3]})`
        }
		return ret;
	}

    /** ### setPixelColor
     * Sets the color of a specific pixel in the canvas.
     * @param {Number} x The x-coordinate of the pixel.
     * @param {Number} y The y-coordinate of the pixel.
     * @param {String} color A hexadecimal color format of the form `"#rrggbb"` or a comma separated rgb color of the form `"r,g,b"`.
     */
    setPixelColor(x=0, y=0, color) {
        if( !color ) return;
        var clr = color;
        if( color.includes(",") ) {
            var s = color.split(",");
            const r = Number(s[0]).toString(16).padStart(2, '0');
            const g = Number(s[1]).toString(16).padStart(2, '0');
            const b = Number(s[2]).toString(16).padStart(2, '0');
            clr = `#${r}${g}${b}`;
        }
        this._ctx.fillStyle = clr;
        this._ctx.fillRect(x, y, 1, 1);
        this._resetCtxStyle();
    }

	/** ### getPixelData
	 * Returns the pixel data of the image.
	 * $$ img.getPixelData() $$
     * @param {Number} x The x-coordinate where to start getting image data.
     * @param {Number} y The y-coordinate where to start getting image data.
     * @param {Number} width The width of the image data.
     * @param {Number} height The height of the image data.
	 * @returns Object
	 */
	getPixelData(x=0, y=0, width, height)
	{
        var data = {};
        width = width || this._ctl.width-x;
        height = height || this._ctl.height-y;
        if( this._canvas ) {
            data = this._ctx.getImageData(x, y, width, height);
        }
        else if(this._loaded) {
            const ctl = document.createElement('canvas');
			ctl.width = this._ctl.width;
			ctl.height = this._ctl.height;
			var ctx = ctl.getContext('2d');
			ctx.drawImage(this._ctl, 0, 0, ctl.width, ctl.height);
			data = ctx.getImageData(x, y, width, height);
        }
		return data;
	}
	get pixelData() { return this.getPixelData(); }

    /** ### setPixelData
     * Set the pixel data of the canvas.
     * @param {String} base64 Base64 encoded string of the image or the `ImageData` object of the canvas.
     * @param {Number} x The x-coordinate of the top-left corner.
     * @param {Number} y The y-coordinate of the top-left corner.
     * @param {Number} width The width of the new image data.
     * @param {Number} height The height of the new image data.
     */
    setPixelData( data, x=0, y=0, width, height ) {
        if(typeof data == "string") {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                this._ctx.putImageData(imageData, x, y, width, height);
            };
            img.onerror = (err) => { console.log(err); }
            img.src = data;
        }
        else if(data instanceof ImageData) {
            this._ctx.putImageData(data, x, y, width, height);
        }
    }

	set fillColor(color) { this._ctxFs = color }
	get fillColor() { return this._ctxFs }

	set strokeColor(color) { this._ctxSs = color }
	get strokeColor() { return this._ctxSs }

	set lineWidth( thick ) { this._ctxLw = thick }
	get lineWidth() { return this._ctxLw }

	set lineCap( cap ) { this._ctxLc = cap }
	get lineCap() { return this._ctxLc }

	set lineJoin( join ) { this._ctxLj = join }
	get lineJoin() { return this._ctxLj }

	set miterLimit( lim ) { this._ctxMl = lim }
	get miterLimit() { return this._ctxMl }

    set fontFile( font ) {
        this._fontFile = font;
    }
    get fontFile() { return this._fontFile; }

    set textStyle(style="normal") { this._ctxFont.style = style.toLowerCase(); }
    get textStyle() { return this._ctxFont.style; }

    set textSize( size ) { this._ctxFont.size = typeof(size)=="number" ? (size+"px") : size; }
    get textSize() { return this._ctxFont.size; }

    set textWeight( weight ) { this._ctxFont.weight = weight; }
    get textWeight() { return this._ctxFont.weight; }

    /** ### setFont
     * Sets a single line font styling for rendering text on canvas.
     * @param {String} family The font-family for the text.
     * @param {Number} size The text-size for the text.
     * @param {String} style Value can be `normal` or `italic`,
     * @param {String} weight Values can be `normal` or `bold`.
     */
    setFont(family, size, style, weight) {
        family = this._ctxFont.family;
        size = this._ctxFont.size;
        style = this._ctxFont.style;
        weight = this._ctxFont.weight;
        this._ctx.font = `${style} ${weight} ${size} ${family}`;
    }

	/** ### drawLine
	 * Draws a line between two points in the canvas.
	 * $$ img.drawLine(x1, y1, x2, y2, strokeColor, strokeWidth ) $$
	 * @param {Number} x1 The x-coordinate of the starting point in pixels.
	 * @param {Number} y1 The y-coordinate of the starting point in pixels
	 * @param {Number} x2 The x-coordinate of the second point in pixels.
	 * @param {Number} y2 The y-coordinate of the second point in pixels.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stroke thickness.
	 * @@ This works only when a `canvas` option is pass.
	 */
	drawLine(x1, y1, x2, y2, strokeColor, strokeWidth ) {
		if( !this._canvas ) return;
		this._ctx.beginPath()

		// this._ctx.lineCap = this._ctxLc
		// this._ctx.lineWidth = strokeWidth == 0 ? 0 : (strokeWidth || this._ctxLw);
		// this._ctx.strokeStyle = strokeColor || this._ctxSs;

        if(strokeColor || strokeWidth>0) {
            this._ctx.lineCap = this._ctxLc;
            this._ctx.lineWidth = strokeWidth === 0 ? 0 : (strokeWidth || this._ctxLw);
            this._ctx.strokeStyle = strokeColor || this._ctxSs;
            // this._ctx.stroke();
        }

		this._ctx.moveTo(x1, y1)
		this._ctx.lineTo(x2, y2)
		this._ctx.stroke()
		this._ctx.closePath()
        this._resetCtxStyle();
	}

	/** ### drawCircle
	 * Draws a circle in the canvas.
	 * $$ img.drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth ) $$
	 * @param {Number} x The x-coordinate of the center of the circle in pixels.
	 * @param {Number} y The y-coordinate of the center of the circle in pixels.
	 * @param {Number} radius The radius of the circle in pixels.
	 * @param {String} fillColor A hexadecimal color.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stoke thickness.
	 * @@ This works only when a `canvas` option is pass. @@
	 */
	drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth ) {
		if( !this._canvas ) return;
		this._ctx.beginPath();
		this._ctx.fillStyle = fillColor || this._ctxFs;
		this._ctx.arc(x, y, radius, 0, Math.PI*2);
		this._ctx.fill();
        if(strokeColor || strokeWidth>0) {
            this._ctx.lineCap = this._ctxLc;
            this._ctx.lineWidth = strokeWidth === 0 ? 0 : (strokeWidth || this._ctxLw);
            this._ctx.strokeStyle = strokeColor || this._ctxSs;
            this._ctx.stroke();
        }
		this._ctx.closePath();
        this._resetCtxStyle();
	}

	/** ### drawSquare
	 * Draws a square into the canvas.
	 * $$ img.drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) $$
	 * @param {Number} x The position from the left of the top-left corner of the square in pixels.
	 * @param {Number} y The distance from the top of the top-left corner of the square in pixels.
	 * @param {Number} width The width of the square in pixels.
	 * @param {String} fillColor A hexadecimal color.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stroke thickness in pixels.
	 * @@ This works only when a `canvas` option is pass. @@
	 */
	drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) {
		if( !this._canvas ) return;
		this._ctx.fillStyle = fillColor || this._ctxFs;
		this._ctx.fillRect(x, y, width, width)
        if(strokeColor || strokeWidth>0) {
            this._ctx.lineWidth = strokeWidth == 0 ? 0 : (strokeWidth || this._ctxLw);
		    this._ctx.strokeStyle = strokeColor || this._ctxSs;
            this._ctx.strokeRect(x, y, width, width);
        }
        this._resetCtxStyle();
	}

	/** ### drawRectangle
	 * Draws a rectangle into the canvas.
	 * $$ img.drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) $$
	 * @param {Number} x1 The distance from the left of the top-left corner of the rectangle in pixels.
	 * @param {Number} y1 The distance from the top of the top-left corner of the rectangle in pixels.
	 * @param {Number} width The width of the rectangle in pixels.
	 * @param {Number} height The height of the rectangle in pixels.
	 * @param {String} fillColor A hexadecimal color.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stroke thickness.
	 * @@ This works only when a `canvas` option is pass. @@
	 */
	drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) {
		if( !this._canvas ) return;
		this._ctx.fillStyle = fillColor || this._ctxFs;
		this._ctx.fillRect(x1, y1, width, height)
        if(strokeColor || strokeWidth>0) {
            this._ctx.lineWidth = strokeWidth == 0 ? 0 : (strokeWidth || this._ctxLw);
		    this._ctx.strokeStyle = strokeColor || this._ctxSs;
            this._ctx.strokeRect(x1, y1, width, height)
        }
        this._resetCtxStyle();
	}

	/** ### drawArc
	 * Draws an arc in the canvas.
	 * $$ img.drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth) $$
	 * @param {Number} x The x-coordinate of the center of the arc in pixels.
	 * @param {Number} y The y-coordinate of the center of the arc in pixels.
	 * @param {Number} radius The radius of the arc in pixels.
	 * @param {Number} start The starting angle in degress
	 * @param {Number} end The angle in degress in which the arc will stop.
	 * @param {String} fillColor A hexadecimal color.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stroke thickness.
     * @param {String} type The type of arc. Can be `filled` or `segment`.
	 * @@ This works only when a `canvas` option is pass.
	 */
	drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth, type="filled") {
		if( !this._canvas ) return;
        type = type.toLowerCase();
		this._ctx.beginPath();
		this._ctx.fillStyle = fillColor || this._ctxFs;
        if(type == "filled") this._ctx.moveTo(x, y);
		this._ctx.arc(x, y, radius, (start*Math.PI)/180, (end*Math.PI)/180);
        if(type == "filled") this._ctx.lineTo(x, y);
		this._ctx.fill();
        if(strokeColor || strokeWidth>0) {
            this._ctx.lineWidth = strokeWidth == 0 ? 0 : (strokeWidth || this._ctxLw);
		    this._ctx.strokeStyle = strokeColor || this._ctxSs;
            this._ctx.stroke();
        }
		this._ctx.closePath()
        this._resetCtxStyle();
	}

    /** ### drawPolyline
	 * Draws a polyline on the canvas by passing an array of points.
	 * @param {Array} points An array of coordinates. Each element on this array is an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stroke thickness.
	 */
	drawPolyline( points, strokeColor, strokeWidth ) {
		if( !this._canvas ) return;
		this._ctx.beginPath()
		this._ctx.lineCap = this._ctxLc
		this._ctx.lineJoin = this._ctxLj
		this._ctx.lineWidth = strokeWidth == 0 ? 0 : (strokeWidth || this._ctxLw);
		this._ctx.strokeStyle = strokeColor || this._ctxSs;
		this._ctx.moveTo( points[0][0] || points[0].x, points[0][1] || points[0].y )
		for( var i=1; i<points.length; i++ ) {
            this._ctx.lineTo( points[i][0] || points[i].x, points[i][1] || points[i].y );
        }
		this._ctx.stroke();
		this._ctx.closePath();
        this._resetCtxStyle();
	}

	/** ### drawPolygon
	 * Draws a polygon on the canvas by passing an array of points.
	 * @param {Array} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param {String} fillColor A hexadecimal color.
	 * @param {String} strokeColor A hexadecimal color.
	 * @param {Number} strokeWidth The stroke thickness.
	 */
	drawPolygon( points, fillColor, strokeColor, strokeWidth ) {
		if( !this._canvas ) return;
		this._ctx.beginPath()
		this._ctx.fillStyle = fillColor || this._ctxFs;
		this._ctx.moveTo(points[0][0] || points[0].x, points[0][1] || points[0].y)
		for( var i=1; i<points.length; i++ ) {
            this._ctx.lineTo(points[i][0] || points[i].x, points[i][1] || points[i].y);
        }
		this._ctx.lineTo(points[0][0] || points[0].x, points[0][1] || points[0].y)
		this._ctx.fill();
        if(strokeColor || strokeWidth>0) { 
            this._ctx.lineCap = this._ctxLc
            this._ctx.lineJoin = this._ctxLj
            this._ctx.lineWidth = strokeWidth == 0 ? 0 : (strokeWidth || this._ctxLw);
            this._ctx.strokeStyle = strokeColor || this._ctxSs;
            this._ctx.stroke()
        }
		this._ctx.closePath();
        this._resetCtxStyle();
	}

	/** ### drawPoint
	 * Draws a single pixel point in a specified coordinate.
	 * $$ img.drawPoint(x, y, color) $$
	 * @param {Number} x The x-coordinate in pixels.
	 * @param {Number} y The y-coordinate in pixels.
     * @paramm {Number} size The width of point in pixels.
	 * @param {String} color A hexadecimal color.
	 */
	drawPoint(x, y, size=1, color) {
		if( !this._canvas ) return;
		this._ctx.fillStyle = color || this._ctxFs;
		this._ctx.fillRect(x, y, size, size);
        this._resetCtxStyle();
	}

    /** ### drawText
     * Add a text in the canvas image.
     * $$ img.drawText(text, x, y, fillColor, strokeColor, strokeWidth) $$
     * @param {String} text The text to be drawn.
     * @param {Number} x Distance from the left in pixels.
     * @param {Number} y Distance from the top in pixels.
     * @param {String} fillColor Text color in hexadecimal format `#rrggbb`.
     * @param {String} strokeColor Text border color in hexadecimal format `#rrggbb`.
     * @param {Number} strokeWidth The border width in pixels.
     */
    drawText(text, x, y, fillColor, strokeColor, strokeWidth) {
        if( !this._canvas ) return;
        this.setFont();
        this._ctx.fillStyle = fillColor || this._ctxFs;
        const h = this.measureText(text);
        if(strokeColor || strokeWidth>0) {
            this._ctx.strokeStyle = strokeColor || this._ctxSs;
            this._ctx.lineWidth = strokeWidth || this._ctxLw;
            this._ctx.strokeText(text, x, y+h.height);
        }
        
        this._ctx.fillText(text, x, y+h.height);
        this._resetCtxStyle();
    }

	/** ### drawImage
	 * Draws an image to the canvas.
	 * $$ drawImage( img, x, y, width, height) $$
	 * @param {String} img Path to image file.
	 * @param {Number} x The distance from the left of the top-left corner of the image in pixels.
	 * @param {Number} y The distance from the top of the top-left corner of the image in pixels.
	 * @param {Number} width If provided, the image will be shrink or stretch to fill this width in pixels.
	 * @param {Number} height If provided, the height of the image will be shrink or stretch to fill this height in pixels.
	 * @@ This works only when a `canvas` option is pass. @@
	 */
	drawImage( imageUrl, x=0, y=0, width, height) {
		if( !this._canvas ) return;
        const img = new Image();
        img.onload = () => {
            width = width || img.width;
            height = height || img.height;
            this._ctx.drawImage(img, x, y, width, height);
        };
        img.src = imageUrl;
	}

	/** ### clear
	 * Clears the drawings by filling the whole canvas with white background color.
	 * $$ img.clear() $$
	 */
	clear() {
		if( !this._canvas ) return;
		this._ctx.fillStyle = "#ffffff";
		this._ctx.fillRect(0, 0, this._ctl.width, this._ctl.height);
	}

    /** ### translateOrigin
     * Translate the origin of the canvas at a new coordinate with the given angle of rotation.
     * $$ img.translateOrigin(x, y, angle) $$
     * @param {Number} x The new x-coordinate of the origin.
     * @param {Number} y The new y-coordinate of the origin.
     * @param {Number} angle The angle of rotation in degrees.
     */
    translateOrigin(x=0, y=0, angle=0) {
        angle = angle * (Math.PI / 180);
        this._ctx.translate(x, y);
        this._ctx.rotate(angle);
    }

    /** ### rotate
     * Rotate the canvas at a given angle and pivot point.
     * $$ img.rotate(angle, x, y) $$
     * @param {Number} angle The angle of rotation in degrees.
     * @param {Number} x An optional x-coordinate of the pivot.
     * @param {Number} y An optional y-coordinate of the pivot.
     */
    rotate(angle, x, y) {
        x = x || this._ctl.offsetWidth/2;
        y = y || this._ctl.offsetHeight/2;
        this._ctl.style.transform = `rotate(${angle}deg)`;
        this._ctl.style.transformOrigin = `${x}px ${y}px`;
    }

    /** ### measureText
     * Measure the text metrics with the current settings of the canvas context.
     * $$ img.measureText( text ) $$
     * @param {String} text The text to measure.
     * @returns Object
     */
    measureText( text ) {
        if( !this._canvas ) return;
        this.setFont();
        const m = this._ctx.measureText(text);
        return {
            height: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
            width: m.width
        };
    }

	set fill( color ) {
		if( !this._canvas ) return;
		this._ctx.fillStyle = color;
		this._ctx.fillRect(0, 0, this._ctl.width, this._ctl.height);
	}
    get fill() { return this._ctx.fillStyle; }

    /** ### setOnTouchDown
     * Add a callback function on touch down event.
     * $$ img.setOnTouchDown( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnTouchDown( callback ) { this._touchDown = callback; }

    /** ### setOnTouchUp
     * Add a callback function on touch up event.
     * $$ img.setOnTouchUp( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnTouchUp( callback ) { this._touchUp = callback; }

    /** ### setOnTouch
	 * Sets a callback function when the image component is touch.
	 * $$ img.setOnTouch( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {Object} pos The position of the touch event.
	 */

    /** ### setOnLoad
	 * Sets a callback function on load event.
	 * $$ img.setOnLoad( callback ) $$
	 * @param {Function} callback The callback function.
	 */
	setOnLoad( callback ) { this._load = callback }

	/** ### setOnTouchMove
	 * Sets a callback function when the a mouse move event is triggered.
	 * $$ img.setOnTouchMove( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {Object} pos The position of the touch event.
	 */
	setOnTouchMove( callback ) {
		this._touchMove = callback
		if( platform.ios || platform.android) this._ctl.ontouchmove = this._onTouchMove.bind(this, true)
		else this._ctl.onmousemove = this._onTouchMove.bind(this, false)
	}

    /** ### setOnLongTouch
     * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds.
     * $$ img.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnLongTouch( callback ) {
        this._longTouch = callback;
    }

    set errorIcon( icon ) {
        this._errorIcon = icon;
        if( this._errorIconEl ) this._errorIconEl.innerText = this._errorIcon;
    }
    get errorIcon() { return this._errorIcon; }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic Image
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

        // Add an image control to the main layout with a width of 7/10 of the parent width
        this.img = ui.addImage(this.main, image, "", 0.5)

        // Add callback handler for `onTouch` event on the image control
        this.img.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the mango!" ) 
    }
}
 */

/**
@sample Avatar
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

        // Add an image control to the main layout.
        // Avatar option will ignore the width of the image control.
        this.img = ui.addImage(this.main, image, "Avatar")

        // Add callback handler for `onTouch` event on the image control
        this.img.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the mango!" )
    }
}
 */

/**
@sample Button
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

        // Add an image control to the main layout.
        // `Button` option will add touch effect when image is click.
        this.img = ui.addImage(this.main, image, "Button", 0.5)

        // Add callback handler for `onTouch` event on the image control
        this.img.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the mango!" )
    }
}
 */

/**
@sample Drawings
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        // Add an image control into the main layout.
        // Pass canvas option to enable drawings on the image
        this.img = ui.addImage( this.main, "", "canvas", 1, 1 )
        this.img.lineCap = "round"
        this.img.lineJoin = "round"

        // Draw a line from (130, 40) to (300, 500)
        this.img.drawLine( 130, 40, 300, 500, "#009688", 10)

        // Draw a square from (320, 200) with a side of 200
        this.img.drawSquare( 320, 200, 200, "#683ab7")

        // Draw a circle centered at (400, 300) with a radius of 300
        this.img.drawCircle(400, 300, 250, "#00000000", "", 20)

        // Draw an arc centered at (800, 200) with a radius of 100
        // from 40 degrees to 270 degrees
        this.img.drawArc(800, 200, 100, 40, 270, "#44009688", "#009688", 10)

        // Draw a polyline from the given set of points below.
        var points = [
            [0,0],
            [400,40],
            [20, 40],
            [300, 340],
            [140, 500]
        ]
        this.img.lineCap = "square"
        this.img.lineJoin = "miter"
        this.img.drawPolyline( points, "blue", 10 )
    }
}
 */

/**
@sample Text and Shapes
class Main extends App
{
    onStart()
    {
        // create a main layout with object vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 );

        // add a canvas image
        this.img = ui.addImage( this.main, "", "canvas", "300px", "500px");

        // draw rectangle
        this.img.drawRectangle(0, 0, 300, 500, "#fff", "", 4);

        // draw polygon
        this.img.drawPolygon([
            {x: 300, y: 0},
            {x: 300, y: 500},
            {x: 0, y: 500}
        ]);

        // draw text
        this.img.textSize = 100;
        this.img.textWeight = "bold";
        this.img.fillColor = "white";
        this.img.drawText("Hello", 30, 225, "", "", 3);
        this.img.drawText("World", 10, 325, "", "", 3);
    }
}
 */

/**
@sample Analog Clock
class Main extends App
{
    onStart()
    {
        // Create a linear layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "", 1, 1 )

        ui.addAppBar( this.main, "Analog Clock" )

        // Create a canvas image
        this.img = ui.addImage( this.main, "", "canvas", "300px", "300px")
        this.img.margins = [null, 0.1]

        // Set the initial line styles
        this.img.lineCap = "round"
        this.img.lineWidth = 4
        this.img.strokeColor = "#009688"
        this.img.lineJoin = "round"

        // Create a text to display the time
        this.time = ui.addText(this.main, "00:00:00", "h6,bold")
        this.time.setMargins(0, 0.05, 0, 0)

        // Call the draw function every second
        setInterval( this.draw.bind(this), 1000)
    }

    draw()
    {
        // Clear all the drawings first in the canvas
        this.img.clear()

        let x, y, n

        // Draw the 12 dot for every hour
        for( n=1; n<=12; n++ ) {
            x = 130 * Math.cos( n * (Math.PI/6) )
            y = 130 * Math.sin( n * (Math.PI/6) )

            x += 150
            y += 150

            this.img.drawCircle(x, y, 4, "#311b92")
        }

        var date = new Date()

        // Get the hour, minutes and seconds
        var hour = date.getHours() > 12 ? date.getHours()-12 : date.getHours();
        var minutes = date.getMinutes()
        var seconds = date.getSeconds()

        // Calculate the corresponding angles
        var hourAngle = hour * ( Math.PI / 6) - ( Math.PI/2 )
        var minAngle = minutes * ( Math.PI / 30 ) - ( Math.PI/2 )
        var secAngle = seconds * ( Math.PI / 30 ) - ( Math.PI/2 )

        // Draw each hand by calling the drawHand function
        this.drawHand(hourAngle, 80, 7, "#311b92")
        this.drawHand(minAngle, 100, 4, "#1e88e5")
        this.drawHand(secAngle, 110, 2, "#d81b60")

        // Draw the black cirlce in the center
        this.img.drawCircle(150, 150, 8, "#000")

        // Display the time
        this.time.text = (`${hour}`.padStart(2, '0')) + ":"+
            (`${minutes}`.padStart(2, '0'))+":" +
            (`${seconds}`.padStart(2, '0')) + (date.getHours() > 12 ? " PM" : " AM")
    }

    drawHand( angle, length, width, color )
    {
        var x, y

        x = length * Math.cos( angle )
        y = length * Math.sin( angle )

        x += 150
        y += 150

        // Draw the hand
        this.img.drawLine(150, 150, x, y, color, width )
    }
}
 */

/**
@sample Scratch Pad
class Main extends App
{
    onStart()
    {
        this.color = "#000000"
        this.main = ui.addLayout( "main", "Linear", "Top", 1, 1 );
        this.main.setChildMargins(0, 0.01, 0, 0.01);

        ui.addText(this.main, "Color", "H5");

        ui.addDivider(this.main);

        var lay = ui.addLayout( this.main, "Linear", "Horizontal,Center,VCenter", 1)
        lay.childSpacing = "even"

        var colors = ["#009688", "#673ab7", "#e53935", "#1e88e5"]
        
        for( var i=0; i<colors.length; i++ ) {
            var btn = ui.addLayout( lay, "Linear", "", "48px", "48px" )
            btn.backColor = colors[i];
            btn.setCornerRadius(8,8,8,8);
            btn.setOnTouch( this.changeColor.bind(this, colors[i]) );
        }

        ui.addDivider(this.main);

        ui.addText( this.main, "Thickness", "H5")
        this.sld = ui.addSlider( this.main, 5, "", 0.9)
        this.sld.setRange(5, 25);
        this.sld.value = 15;

        this.img = ui.addImage( this.main, "", "canvas", 0.96, 0.7);
        this.img.fill = "#e0e0e0";
        this.img.setOnTouchMove( this.draw );
        this.img.setOnTouchDown( this.draw );
        this.img.setOnTouch( this.draw );
    }

    changeColor( color ) { this.color = color; }

    draw( e ) {
        this.img.drawCircle( e.x, e.y, this.sld.value, this.color, "", 0 )
    }
}
 */