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


    /** ### setOnContextMenu
     * @name setOnContextMenu
     * Adds a callback function on right click.
     * $$ setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {Object} event The pointer event object.
     */


    /** ### animate
     * @name animate
     * Animate the component.
     * $$ cname.animate(anim, duration) $$
     * @param {String} anim The type of animation. Here are the available values\n`bounce`, `flash`, `pulse`, `rubberBand`, `shakeX`, `shakeY`, `headShake`, `swing`, `tada`, `wobble`, `jello`, `heartBeat`,\nBack Entrances: `backInDown`, `backInLeft`, `backInRight`, `backInUp`\nBack Exits: `backOutDown`, `backOutLeft`, `backOutRight`, `backOutUp`\nBouncing Entrances: `bounceIn`, `bounceInDown`, `bounceInLeft`, `bounceInRight`, `bounceInUp`\nBouncing exits: `bounceOut`, `bounceOutDown`, `bounceOutLeft`, `bounceOutRight`, `bounceOutUp`\nFading entrances: `fadeIn`, `fadeInDown`, `fadeInDownBig`, `fadeInLeft`, `fadeInLeftBig`, `fadeInRight`, `fadeInRightBig`, `fadeInUp`, `fadeInUpBig`, `fadeInTopLeft`, `fadeInTopRight`, `fadeInBottomLeft`, `fadeInBottomRight`\nFading exits: `fadeOut`, `fadeOutDown`, `fadeOutDownBig`, `fadeOutLeft`, `fadeOutLeftBig`, `fadeOutRight`, `fadeOutRightBig`, `fadeOutUp`, `fadeOutUpBig`, `fadeOutTopLeft`, `fadeOutTopRight`, `fadeOutBottomRight`, `fadeOutBottomLeft`\nFlippers: `flip`, `flipInX`, `flipInY`, `flipOutX`, `flipOutY`\nLightspeed: `lightSpeedInRight`, `lightSpeedInLeft`, `lightSpeedOutRight`, `lightSpeedOutLeft`\nRotating Entrances: `rotateIn`, `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight`\nRotating Exits: `rotateOut`, `rotateOutDownLeft`, `rotateOutDownRight`, `rotateOutUpLeft`, `rotateOutUpRight`\nSpecials: `hinge`, `jackInTheBox`, `rollIn`, `rollOut`\nZooming Entrances: `zoomIn`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInUp`\nZooming Exits: `zoomOut`, `zoomOutDown`, `zoomOutLeft`, `zoomOutRight`, `zoomOutUp`\nSliding Entrances: `slideInDown`, `slideInLeft`, `slideInRight`, `slideInUp`\nSliding Exits: `slideOutDown`, `slideOutLeft`, `slideOutRight`, `slideOutUp` 
     * @param {Number} duration The time in milliseconds.
     */


    /** ### setSize
     * @name setSize
     * Sets the size of the component.
     * $$ cname.setSize(width, height, mode)
     * @param {Number} width Fraction of the parent width. [0-1]
     * @param {Number} height Fraction of the parent height. [0-1]
     * @param {String} mode Unit of measurment. Can be "px", "rem", "%", "v" for viewport width/height or any css supported unit.
     */


    /** ### show
     * @name show
     * Show the component.
     * $$ cname.show()
     */


    /** ### hide
     * @name hide
     * Hide the component. 
     * $$ cname.hide()
     */


    /** ### gone
     * @name gone
     * Destroy the component.
     * $$ cname.gone()
     */


    /** ### destroy
     * @name destroy
     * Destroy the component.
     * $$ cname.destroy()
     */


    /** ### setScale
     * @name setScale
     * Sets the x and y scaling of the component. This will ignore the positioning and flow of controls in the layout.
     * $$ cname.setScale(x, y)
     * @param {Number} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
     * @param {Number} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
     */


    /** ### getPosition
     * @name getPosition
     * Returns the position of the component. The return object is of the form `{left, top, right, bottom}`
     * $$ cname.getPosition( options ) $$
     * @param {String} options The mode of the measurements. Values can be `px` or `%`
     * @returns Object
     */


    /** ### setMargins
     * @name setMargins
     * Sets the margin of the component.
     * $$ cname.setMargins( left, top, right, bottom, mode ) $$
     * @param {Number} [left] Left margin. You can also pass string e.g. `12rem`
     * @param {Number} [top] Top margin. You can also pass string e.g. `12rem`
     * @param {Number} [right] Right margin. You can also pass string e.g. `12rem`
     * @param {Number} [bottom] Bottom margin. You can also pass string e.g. `12rem`
     * @param {String} [mode] Unit of measurement.\n`rem` for root em.\n`px` for pixels\n`%` relative to its parent dimension.\n`v` relative to viewport dimension.
     */


    /** ### setPadding
     * @name setPadding
     * Sets the padding of the component's container.
     * $$ cname.setPadding(left, top, right, bottom, mode) $$
     * @param {Number} [left] Fraction of the component width.
     * @param {Number} [top] Fraction of the component height. [0-1]
     * @param {Number} [right] Fraction of the component width. [0-1]
     * @param {Number} [bottom] Fraction of the component height. [0-1]
     * @param {String} [mode] Unit of measurement.\n`rem` for root em.\n`px` for pixels\n`%` relative to its parent dimensions\n`v` relative to viewport dimensions.
     */


    /** ### setPosition
     * @name setPosition
     * Sets the position of the component relative to its parent dimensions.
     * $$ cname.setPosition( left, top, mode ) $$
     * @param {Number} left Fraction of the parent width. [0-1]
     * @param {Number} top Fraction of the parent height. [0-1]
     * @param {String} mode Unit of measurement.\n`rem` for root em.\n`px` for pixels\n`%` relative to its parent dimensions\n`v` relative to viewport dimensions.
     */


    /** ### setBorder
     * @name setBorder
     * Sets the border line for the component container.
     * $$ cname.setBorder(left, top, right, bottom, clr, style) $$
     * @param {Number} [left] Border-left thickness in pixels.
     * @param {Number} [top] Border-top thickness in pixels.
     * @param {Number} [right] Border-right thickness in pixels.
     * @param {Number} [bottom] Border-bottom thickness in pixels.
     * @param {String} [clr] Border color in hexadecimal format `#rrggbb`.
     * @param {String} [style] Border-styles. Values can be `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` and `outset`. Default is `solid`
     */


    /** ### setCornerRadius
     * @name setCornerRadius
     * Sets the corner radius of the component.
     * $$ cname.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-Left border radius.
     * @param {Number} [tr] Top-Right border radius.
     * @param {Number} [br] Bottom-Right border radius.
     * @param {Number} [bl] Bottom-Left border radius.
     * @param {String} [mode] Unit of measurement. Values are `px` `rem` or `%`.
     */


    /** ### bringForward
     * @name bringForward
     * Bring this component forward by a given z-index.
     * $$ cname.bringForward( zIndex )
     * @param {Number} zIndex The z-index. A negative value behaves like `sendBackward` method.
     */


    /** ### sendBackward
     * @name sendBackward
     * Bring this component backward by a given z-index.
     * $$ cname.bringForward( zIndex )
     * @param {Number} zIndex The z-index. A positve value behaves like `bringForward` method.
     */


