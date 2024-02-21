
/** # Stepper #
 * @abbrev stp
 * A Stepper in mobile UI design is a navigation element that guides users through a multi-step process, typically used for forms or sequential tasks.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it provides clear indicators of progress and allows users to navigate forward and backward through steps, ensuring a structured and user-friendly experience in mobile applications. Add a stepper into your app using the `addStepper` method like this:
 * $$ stp = ui.addStepper(parent, steps, options, width, height) $$
 * @param {Object} parent The parent layout of the Stepper.
 * @param {Array} steps An array of titles.
 * @param {String} options A comma separated options.\n`Vertical`, `Horizontal`, `Loop`, `Mobile`, `AlternativeLabel`.
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Stepper
 * For `Mobile` option, an additional position options can be added `Top`, `Static` or `Bottom` and `AutoSwipe` to enable auto swiping.
 * To style step count text, pass `Fraction`, `Dots` or `Progress` options.
 * For `vertical` and `mobile`, you can add Layout type `Linear` or `Absolute`
 */

ui.addStepper = function( parent, steps, options, width, height )
{
    return new ui.Stepper( parent, steps, options, width, height )
}

ui.Stepper = class extends ui.Control
{
	constructor( parent, steps, options, width, height )
	{
		super( parent, width, height, options, "Stepper" )
        this._steps = steps || [];
        if(typeof steps == "string") this._steps = steps.split(",");
        else if(typeof steps == "object") this._steps = JSON.parse(JSON.stringify(steps));
		this._loop = this._options.includes( 'loop' )
		this._onComplete = null
		this._onChange = null
		this._layouts = []
        this._layType = this.options.includes("absolute") ? "Absolute" : "Linear"
        this._style1 = {}
        this._props.activeStep = 0
        this._props.nonLinear = false
        this._mobileProps = {
            square: true,
		    elevation: 0
        }
        this._cornerRadius = 4;
		this._initProps()
		this._initStyle()
		this._render()
	}

	// Inivisible methods
	_initProps()
	{
		this._props.orientation = this._options.includes( 'vert' ) ? 'vertical' : 'horizontal'
		this._props.alternativeLabel = this._options.includes('alternativelabel')

		if( this._props.orientation == "vertical" || this._options.includes( "mobile" ) )
		{
			for( var i=0; i<this._steps.length; i++ ) {
                if( !this._layouts[i] ) {
                    this._layouts[i] = ui.addLayout( null, this._layType, "nodom,Left", 1, 1 )
                    if( this._layType == "Absolute" ) this._layouts[i]._div2.style.height = "100%"
                }
            }
		}

		if( this._options.includes( "mobile" ) )
		{
			this._props = {
				steps:this._steps.length,
				position: this._options.includes( "top" ) ? "top" : ( this._options.includes( "bottom" ) ? "bottom" : "static" ),
				variant: this._options.includes( "fraction" ) ? "text" : ( this._options.includes( "progress" ) ? "progress" : "dots" ),
				activeStep: 0
			}
			this._refs = []
		}
	}

	_initStyle()
	{
        this._style.boxSizing = "border-box"
		this._style.width = "100%"
        this._style.padding = 0

        this._div.style.display = "inline-flex"
        this._div.classList.add("MuiPaper-root", "MuiPaper-elevation0")

        if(this._props.orientation == "horizontal") {
            this._style.height = "100%"
            this._div.style.alignItems = "center"
        }
        else {
            this._div.style.alignItems = "start"
        }
	}
	
	// handle StepContent layout ref
	_getRef( i, ref )
	{
		if( ref && this._layouts[i] ) ref.appendChild( this._layouts[i]._div )
	}

    _nxt( e ) {
        e.stopPropagation()
		this.nextStep()
    }

    _prv( e ) {
        e.stopPropagation()
		this.previousStep()
    }

    _checkComplete()
    {
        if( !this._onComplete ) return;
        if(this._props.activeStep == this._steps.length-1 && this._options.includes("mobile")) this._onComplete();
        else if(this._props.activeStep == this._steps.length && !this._options.includes("mobile")) this._onComplete();
    }

	_render()
	{
		var e = React.createElement
		const {Step, StepLabel,StepContent, MobileStepper, Button, Paper, Typography, Stepper} = window['MaterialUI']
		if( this._options.includes( "mobile" ) ) this._props.steps = this._steps.length
		if( this._options.includes( "mobile" ) && this._options.includes( "autoswipe" ) ) 
			var AutoPlaySwipeableViews = autoPlay( SwipeableViews )
		this._ctl = !this._options.includes( "mobile" ) ? e(
			Stepper, {
				...this._props,
				style: { ...this._style },
				onContextMenu: this._onContextMenu.bind( this )
			},
			this._steps.map( (step, i) => {
				return e(Step, {
					key: i,
					active: this._props.activeStep==i,
					style: { boxSizing: "border-box" }
				}, [
					e( StepLabel, { key: 0 }, e("span", {style:{...this._style1}}, step ) ),
					( this._props.orientation == "vertical" ?
                        e( StepContent, {
                            key: 1,
                        }, e("div", {
                            ref: this._getRef.bind( this, i ),
                        }, null) ) : null
                    )
				])
			})
		) :

		// for mobile and AutoSwipeableViews
		e( "div", {
				style: { ...this._style,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: this._cornerRadius
                },
				onContextMenu: this._onContextMenu.bind( this )
			}, [
				e( Paper, {
                    ...this._mobileProps,
					key: 0,
					style: {
						display: "flex",
						alignItems: "center",
						height: 50,
                        backgroundColor: this._backColor ? this._backColor : null
					}
				}, e( Typography, {style:{...this._style1, marginLeft: 16}}, this._steps[this._props.activeStep] ) ),

				// if options has autoswipe
				this._options.includes( "autoswipe" ) ? e( AutoPlaySwipeableViews, {
					key: 1,
					index: this._props.activeStep,
					onChangeIndex: step => {
						this._props.activeStep = step;
                        var e = this._layouts[ this._props.activeStep ]._div
                        this._render();
						if( !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length ) )
						{
							if(this._props.activeStep == this._steps.length-1 && this._onComplete) this._onComplete()
							if( this._change ) this._change( this._props.activeStep )
						}
					},
					enableMouseEvents: true,
                    style: {
                        width: "100%",
                        height: "100%",
                        flexGrow: 1
                    },
                    containerStyle: {
                        with: "100%",
                        height: "100%"
                    }
				},
				this._steps.map( ( s, i ) => {
					return e( "div", {
						key: i+1,
						ref: this._getRef.bind( this, i ),
						style: {
							width: "100%",
                            height: "100%",
                            display: "block",
                            flexGrow: 1
						}
					}, "" )
				})) :
				// if mobile is not autoswipe
				this._steps.map( ( s, i ) => {
                    if( this._props.activeStep == i) return e( "div", {
                        key: i+1,
                        ref: this._getRef.bind( this, i ),
                        style: {
                            width: "100%",
                            display: "block",
                            overflow: "hidden",
                            flexGrow: 1
                        }
                    }, "")
                }),
				e( MobileStepper, {
					key: this._steps.length + 1,
					...this._props,
					nextButton: e( Button, {
						size: "small",
						disabled: this._props.activeStep >= this._steps.length-1,
						onClick: platform.ios ? null : this._nxt.bind(this),
                        onTouchEnd: platform.ios ? this._nxt.bind(this) : null
					}, [
						e( "span", { key: 0 }, "Next" ),
						e( "i", { className: "material-icons", key: 1 }, "keyboard_arrow_right" )
					] ),
					backButton: e( Button, {
						size: "small",
						disabled: this._props.activeStep <= 0,
						onClick: platform.ios ? null : this._prv.bind(this),
                        onTouchEnd: platform.ios ? this._prv.bind(this) : null
					}, [
						e( "i", { className: "material-icons", key: 0 }, "keyboard_arrow_left" ),
						e( "span", { key: 1 }, "Back" )
					]),
                    style: { width: "100%", boxSizing: "border-box", backgroundColor: this._backColor ? this._backColor:null }
				})
			]
		)
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

	/** ## Properties ##
	 * Here are the available setters and getters of the Stepper Component.
	 * @prop {Number} activeStep Sets or returns the active step.
	 * @prop {String} orientation Sets or returns the orientation of the Stepper. Values can be `Horizontal` or `Vertical`.
     * @prop {Number} elevation Sets or returns the elevation of the mobile stepper. Value ranges from `0` to `24`.
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

	/** ## Methods
	 * Here are the methods available for Stepper Component.
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
    
    /** ### setOnComplete
	 * Adds a callback function to be called when the stepper is complete. For mobile stepper, callback will be called upon showing the last step.
	 * $$ stp.setOnComplete( callback ) $$
	 * @param {Function} callback The function to be called
	 */
	setOnComplete( callback ) { this._onComplete = callback }

	/** ### setOnChange
	 * Adds a callback function to be called when the stepper has changed step.
	 * $$ stp.setOnChange( callback ) $$
	 * @param {Function} callback The callback function to be called. ---> @arg {Number} index The index of the active step.
	 */
	setOnChange( callback ) { this._change = callback }

	/** ### nextStep
	 * Go to the next step.
	 * $$ stp.nextStep() $$
	 */
	nextStep()
	{
		if( this._props.activeStep < this._steps.length ) this._props.activeStep++;
		else if( this._loop ) this._props.activeStep = 0;
        
        if( this._change ) this._change( this._props.activeStep );

        this._checkComplete();

		this._render();
	}

	/** ### previousStep
	 * Go to the previous step.
	 * $$ stp.previousStep() $$
	 */
	previousStep()
	{
		if( this._props.activeStep > 0 ) this._props.activeStep--;
		else if( this._loop ) this._props.activeStep = this._steps.length-1;
        if( this._change ) this._change( this._props.activeStep );
		this._render();
	}

	setActiveStep( step ) { this.activeStep = step }
    getActiveStep() { return this._props.activeStep; }
	set activeStep( step )
	{
		if(step < this._steps.length) {
			this._props.activeStep = step;

            if( this._change ) this._change( this._props.activeStep );
            
            this._checkComplete();
            
			this._render();
		}
    }
	get activeStep() { return this._props.activeStep; }

	setOrientation( orient )
	{
		this._props.orientation = orient.toLowerCase()
		this._render()
	}
    getOrientation() { return this._props.orientation; }
	set orientation( orient )
	{
		this._props.orientation = orient.toLowerCase()
		this._render()
	}
	get orientation() { return this._props.orientation; }

	/** ### getLayout
	 * Returns the layout of the corresponding step layout where you can add controls.
	 * $$ stp.getLayout( index ) $$
	 * @param {Number} index The index of the corresponing stepper layout
	 * @returns Object Layout
	 */
	getLayout( index ) { return this._layouts[ index ]; }

	/** ### getLayoutIndex
	 * Get the index of the corresponding layout.
	 * $$ stp.getLayoutIndex(layout) $$
	 * @param {Object} layout The layout to check.
	 * @returns Number
	 */
	getLayoutIndex( layout ) {
		for( var i=0; i<this._layouts.length; i++ )
			if( layout == this._layouts[i] ) return i
		return -1
	}

	addStep( title, index ) {
		var lay
		if( this._options.includes("vertical") || this._options.includes("mobile") ) {
			lay = ui.addLayout( null, this._layType, "nodom", 1, 1 )
            if( this._layType == "Absolute" ) lay._div2.style.height = "100%"
        }
		if( typeof(index) == "number" && index >= 0 ) {
			this._steps.splice(index, 0, title)
			if(lay) this._layouts.splice(index, 0, lay)
		} else {
			this._steps.push(title)
			if(lay) this._layouts.push(lay)
		}
		this._steps.splice()
		this._render()
	}

	/** ### removeStep
	 * Removes a corresponding step by its index.
	 * $$ stp.removeStep( index ) $$
	 * @param {Number} index The index of the step to remove.
	 */
	removeStep( index ) {
		if( index < 0 ) return
		this._steps.splice(index, 1)
		if( this._options.includes("vertical") || this._options.includes("mobile") )
			this._layouts.splice(index, 1)
		if( this._props.steps ) this._props.steps--
		this._render()
	}

    /** ### setTitleText
     * Sets a new title for the corresponding step by its index.
     * $$ stp.setTitleText(index, title) $$
     * @param {Number} index The index of the Stepper.
     * @param {String} title The new title text.
     */
    setTitleText(index, title) {
        this._steps[index] = title
        this._render()
    }

    set textSize(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    set textColor(color) {
        this._style1.color = color
        this._render()
    }
    get textColor() { return this._style1.color }

    set backColor(color) {
        this._style.backgroundColor = color
        this._div.style.backgroundColor = color
        this._backColor = color
        this._render()
    }
    get backColor() { return this._style.backgroundColor }

    set cornerRadius( px ) {
        this._div.style.borderRadius = px+"px"
        this._cornerRadius = px+"px"
        this._render()
    }
    get cornerRadius() { return this._div.style.borderRadius }

    show() { this._div.style.display = "inline-flex"; }

    set elevation( val ) {
        this._mobileProps.elevation = val;
        this._render();
    }
    get elevation() { return this._mobileProps.elevation; }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style.backgroundColor = "";
        this._style.backgroundImage = `url('`+img+`')`;
        this._style.backgroundSize = "cover";
        this._style.backgroundPosition = "center";
        this._style.backgroundRepeat = "no-repeat";
        this._render();
    }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic stepper
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Initialize the steps array
        var steps = ["Step 1", "Step 2", "Step 3"]
        
        // Add a stepper component to the main layout
        this.stp = ui.addStepper(this.main, steps, "", 0.6)

        // Add back button control to the main layout
        this.btnBack = ui.addButton(this.main, "Back", "Raised,Primary")
        this.btnBack.setOnTouch( this.back )

        // Add next button control to the main layout
        this.btnNext = ui.addButton(this.main, "Next", "Raised,Primary")
        this.btnNext.setOnTouch( this.next )
    }

    next()
    {
        this.stp.nextStep()
    }

    back()
    {
        this.stp.previousStep()
    }
}
 */

/**
@sample Vertical stepper
class Main extends App
{
    onStart()
    {
        // Creates a fulscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Stepper titles
        var steps = ["Step 1", "Step 2", "Step 3"]

        // Add a stepper control into the main layout
        this.stp = ui.addStepper(this.main, steps, "Vertical", 0.5, 0.6)
        
        // Get the layout of the first step
        var step1Lay = this.stp.getLayout( 0 )
        step1Lay.setChildMargins(0, 0.005, 0, 0.005)

            // Add controls to the first step layout
            ui.addText(step1Lay, "This is a text content on step 1")
            var btnStep1Next = ui.addButton(step1Lay, "Next", "Raised,Primary")
            btnStep1Next.setOnTouch( this.next )

        // Get the layout of the second step
        var step2Lay = this.stp.getLayout( 1 )
        step2Lay.setChildMargins(0, 0.005, 0, 0.005)

            // Add controls to the second step layout
            ui.addText(step2Lay, "This is a text content on step 2")
            var btnStep2Next = ui.addButton(step2Lay, "Next", "Raised,Primary")
            btnStep2Next.setOnTouch( this.next )

        // Get the layout of the third step
        var step3Lay = this.stp.getLayout( 2 )
        step3Lay.setChildMargins(0, 0.005, 0, 0.005)

            // Add controls to the third step layout
            ui.addText(step3Lay, "This is a text content on step 3")
            var btnStep3Next = ui.addButton(step3Lay, "Next", "Raised,Primary")
            btnStep3Next.setOnTouch( this.next )
    }

    next()
    {
        this.stp.nextStep()
    }

    back()
    {
        this.stp.previousStep()
    }
}
 */

/**
@sample Mobile Stepper
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var steps = ["Step 1", "Step 2", "Step 3"]

        var img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
        var img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
        var img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

        // Add stepper control with `mobile` option
        this.stp = ui.addStepper(this.main, steps, "mobile", 0.6, 0.7)

        // get the first layout on the stepper
        this.lay1 = this.stp.getLayout( 0 )

            // add an image control to the first layout
            ui.addImage(this.lay1, img1, "", 1, 1)
        
        // get the second layout on the stepper
        this.lay2 = this.stp.getLayout( 1 )

            // add an image control to the second layout
            ui.addImage(this.lay2, img2, "", 1, 1)
        
        // get the third layout on the stepper
        this.lay3 = this.stp.getLayout( 2 )

            // add an image control to the third layout
            ui.addImage(this.lay3, img3, "", 1, 1)

        // Add a callback handler when stepper layout changes
        this.stp.setOnChange( this.onChange )
    }

    onChange( index )
    {
        ui.showPopup( "Layout index " + index )
    }
}
 */

/**
@sample Autoswipe and Fraction Mobile Stepper
class Main extends App
{
    onStart()
    {
        ui.setTheme("dark")

        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var steps = ["Step 1", "Step 2", "Step 3"]

        var img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
        var img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
        var img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

        // Add stepper control with `mobile` option
        this.stp = ui.addStepper(this.main, steps, "mobile,autoswipe,fraction", 0.6)

        // Get the first layout on the stepper
        this.lay1 = this.stp.getLayout( 0 )

            // Add an image control to the first layout
            ui.addImage(this.lay1, img1, "", 1)
        
        // Get the second layout on the stepper
        this.lay2 = this.stp.getLayout( 1 )

            // Add an image control to the second layout
            ui.addImage(this.lay2, img2, "", 1)
        
        // Get the third layout on the stepper
        this.lay3 = this.stp.getLayout( 2 )

            // Add an image control to the third layout
            ui.addImage(this.lay3, img3, "", 1)

        // Add a callback handler when stepper layout changes
        this.stp.setOnChange( this.onChange )
    }

    onChange( index )
    {
        ui.showPopup( "Layout index " + index )
    }
}
 */