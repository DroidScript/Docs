
/** ### animate
 * @brief animate
 * Animate the component
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} [duration] The time in milliseconds.
 */


/** ### setSize
 * @brief setSize
 * Sets the size of the component
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### gone
 * @brief gone
 * Destroy the component
 */


/** ### destroy
 * @brief destroy
 * Destroy the component
 */


/** ### setScale
 * @brief setScale
 * Sets the x and y scaling of the component
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins
 * @brief setMargins
 * Sets the margin of the component
 * @param {num} [left] Fraction of the parent width.
 * @param {num} [top] Fraction of the parent height.
 * @param {num} [right] Fraction of the parent width.
 * @param {num} [bottom] Fraction of the parent height.
 * @param {str} [mode='px'] `px` or `%`
 */


/** ### setBorder
 * @brief setBorder
 * Sets the border line for the component container
 * @param {num} [width] Border-left thickness in pixels.
 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward
 * @brief bringForward
 * Bring this component forward by a given z-index
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */


/** ### hide
 * @brief hide
 * Hide the component
 */


/** ### setPadding
 * @brief setPadding
 * Sets the padding component container
 * @param {num} [left] Fraction of the component width.
 * @param {num} [top] Fraction of the component height. [0-1]
 * @param {num} [right] Fraction of the component width. [0-1]
 * @param {num} [bottom] Fraction of the component height. [0-1]
 * @param {str} [mode='px'] The size thickness mode. Can be `px`
 */


/** ### setPosition
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * @param {num} [left] Fraction of the parent width. [0-1]
 * @param {num} [top] Fraction of the screen height. [0-1]
 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### show
 * @brief show
 * Show the component
 */


/** ### setOnContextMenu
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The pointer event object."]}
 */


/** ### setOnTouch
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The click event object."]}
 */


/** ### setCornerRadius
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * @param {num} [tl] Top-Left border radius in pixels.
 * @param {num} [tr] Top-Right border radius in pixels.
 * @param {num} [bl] Bottom-Left border radius in pixels.
 * @param {num} [br] Bottom-Right border radius in pixels.
 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
 */

