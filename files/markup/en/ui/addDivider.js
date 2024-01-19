// ------------- HEADER SECTION -------------


/** # addDivider #
 * @abbrev div
 * @brief addDivider
 * Adds a hairline divider into your layout.
 * $$ div = ui.addDivider(parent, width?, options?) $$
 * @param {obj} parent The layour where to add the divider.
 * @param {num} [width=1] Fraction of the screen width.
 * @param {str} [options] A comma separated Divider options. Values can be `Inset`
 * @returns uio-Divider
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** @extern backColor */

/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** ### color
 * @prop
 * Sets or returns the color in hexadecimal format.
 * @returns str_col
 */


/** @extern cornerRadius */

/** @extern disabled */

/** @extern fontFile */

/** @extern height */

/** @extern isVisible */

/** @extern left */

/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

/** @extern textColor */

/** @extern textSize */

/** @extern top */

/** @extern type */

/** @extern visibility */

/** @extern width */

/** @extern setOnTouch */

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


// ------------- SAMPLES -------------



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
