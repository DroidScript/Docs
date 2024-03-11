/** # Divider
 * @abbrev div
 * A divider is a visual element used to separate content or components within a layout.
 * @img(img1.png)
 * @jdocs In Material Design, dividers are often lines or subtle indicators that enhance visual clarity and organization. They help create a structured and clean interface by distinguishing different sections or items within a mobile application's layout. Add a divider into your app using the `addDivider` method like this:
 * $$ ui.addDivider(parent, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the divider.
 * @param {Number} [width=1] Fraction of the parent width. Default is 1.
 * @param {String} [options] A comma separated options.\n`Inset` to add some padding.
 * @returns uio-Divider
 */


	/** ## Properties
	 * Here are the available setters and/or getters of the Divider Component.
	 * @prop {String} color Sets or returns the color in hexadecimal format.
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


    /** ## Methods
     * Here are the methods for Divider component.
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


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add text control to the main layout
        var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus deleniti, eum nulla rerum dignissimos nihil, quidem facere repellendus necessitatibus incidunt non quasi doloremque delectus repellat pariatur dolorum. Omnis, vero."
        ui.addText(this.main, text, "Justify", 0.8)

        // Add divider control to the main layout
        this.div = ui.addDivider(this.main, 0.8)

        // Add more text control to the main layout
        ui.addText(this.main, text, "Justify", 0.8)
        
        // Add an inset divider to the main layout
        this.div = ui.addDivider(this.main, 0.8, "inset")

        ui.addText(this.main, text, "Justify", 0.8)
    }
}
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add text control to the main layout
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus deleniti, eum nulla rerum dignissimos nihil, quidem facere repellendus necessitatibus incidunt non quasi doloremque delectus repellat pariatur dolorum. Omnis, vero."
    ui.addText(main, text, "Justify", 0.8)

    # Add divider control to the main layout
    div = ui.addDivider(main, 0.8)

    # Add more text control to the main layout
    ui.addText(main, text, "Justify", 0.8)

    # Add an inset divider to the main layout
    div = ui.addDivider(main, 0.8, "inset")

    ui.addText(main, text, "Justify", 0.8)
 */


