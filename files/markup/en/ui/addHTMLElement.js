/** # HTMLElement
 * @abbrev elt
 * Add an html element into your layout.
 * $$ elt = ui.addHTMLElement(parent, tag, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the element.
 * @param {String} tag Html tag.
 * @param {String} options Comma separated options.
 * @param {Number} width Fraction of the parent width “[0-1]”.
 * @param {Number} height Fraction of the parent height “[0-1]”.
 * @returns uio-HTMLElement
 */


/**
 * You can then use the methods and properties available for an html element as well as the common ui.Control methods and properties.
 */


/** ## Properties ##
 * @jdocs These are the available setter and getter properties of an html element inherited from UI Control component.
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


/** ## Methods
 * @jdocs These are the available methods of an html element inherited from UI Control component.
 */


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


/** @extern addClass */


/** @extern setOnContextMenu */


/* ## Examples */


/**
@sample Button element
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Add a button element into your layout
        this.btn = ui.addHTMLElement(this.main, "button", "", 0.1, 0.1)
        this.btn.innerText = "My Button"
        this.btn.onclick = this.onTouch
        
        // this.btn.addEventListener("click", this.onTouch)
    }

    onTouch( e )
    {
        e.stopPropagation()
        ui.showPopup( "You touched the button" )
    }
}
 */


/**
@sample Python Button element
from hybrid import ui

def OnStart():
    #Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    
    #Add a button element into your layout
    btn = ui.addHTMLElement(main, "button", "", 0.1, 0.1)
    btn.innerText = "My Button"
    btn.onclick = onTouch
    
    #this.btn.addEventListener("click", this.onTouch)
def onTouch( e ):
    e.stopPropagation()
    ui.showPopup( "You touched the button" )
 */


