// ------------- HEADER SECTION -------------


/** # addTreeView #
 * @abbrev trv
 * @brief addTreeView
 * 
 * $$ trv = ui.addTreeView(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the TreeView component.
 * @param {obj} list An object of the treeview items. See example below.
 * @param {str} options A comma separated TreeView options.
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns uio-TreeView
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a TreeView component into your app. A tree view is best use in file system navigation.

### Properties
These are the setter and getter properties for the addTreeView Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"obj:'Sets or returns the list object.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"str:'Returns the selected item of the TreeView.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Add a on touch handler to the TreeView item when click
 * $$ trv.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value","path"],"pTypes":["str-The selected tree item.","str-The complete path of the tree item."]}
 */


/** ### setList ###
 * @brief setList
 * Updates the list items of the TreeView component
 * $$ trv.setList(obj) $$
 * @param {obj} obj The list object of the treeview items. See example above.
 */


/** ### addItem ###
 * @brief addItem
 * Add a tree items to the tree view
 * $$ trv.addItem(name, obj) $$
 * @param {str} name The label text for the new item.
 * @param {obj} obj See list object for more info.
 */


/** ### getItem ###
 * @brief getItem
 * Returns the list items object of a given parent tree item name
 * $$ trv.getItem(name) $$
 * @param {str} name The parent name of the tree items.
 * @returns obj
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


// ------------- SAMPLES ------------- 


    
/**
@sample Items
var items = {
    "Group 1": {
        "Item 1": "",
        "Item 2": "",
        "Item 3": ""
    },
    "Group 2": {
        "Item 1": "",
        "Item 2": "",
        "Item 3": ""
    },
    "Applications": {
        "Editor": "",
        "Productivity": "",
        "Social Media": {
            "TikTok": "",
            "YouTube": "",
            "Meta": {
                "Facebook": "",
                "Instagram": "",
                "Whatsapp": "",
                "Messenger": ""
            }
        }
    }
}
 */
    
            
    
/**
@sample Items with icons
var items = {
    "Folders": {
        "Music": "music_note",
        "Photos": "photo",
        "Favorites": "favorite"
    }
}
 */
    
            
    
/**
@sample Basic TreeView
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "Center,ScrollY,FillXY")

        // Initialize json object for the treeview items
        var items = {
            "Group 1": {
                "Item 1": "",
                "Item 2": "",
                "Item 3": ""
            },
            "Group 2": {
                "Item 1": "",
                "Item 2": "",
                "Item 3": ""
            },
            "Applications": {
                "Editor": "",
                "Productivity": "",
                "Social Media": {
                    "TikTok": "",
                    "YouTube": "",
                    "Meta": {
                        "Facebook": "",
                        "Instagram": "",
                        "Whatsapp": "",
                        "Messenger": ""
                    }
                }
            }
        }

        // Add a treeview component to the main layout
        this.trv = ui.addTreeView(this.main, items, "Primary")
        this.trv.setMargins(0, 5, 0, 0, "rem")

        // Add a callback handler when the treeview item is touched
        this.trv.setOnTouch( this.onTouch )
    }

    onTouch(value, path)
    {
        ui.showPopup("Value: "+value + " Path: "+path)
    }
}
 */
    
            
    
/**
@sample Python Items
items = {
    "Group 1": {
        "Item 1": "",
        "Item 2": "",
        "Item 3": ""
    },
    "Group 2": {
        "Item 1": "",
        "Item 2": "",
        "Item 3": ""
    },
    "Applications": {
        "Editor": "",
        "Productivity": "",
        "Social Media": {
            "TikTok": "",
            "YouTube": "",
            "Meta": {
                "Facebook": "",
                "Instagram": "",
                "Whatsapp": "",
                "Messenger": ""
            }
        }
    }
}
 */
    
            
    
/**
@sample Python Items with icons
items = {
    "Folders": {
        "Music": "music_note",
        "Photos": "photo",
        "Favorites": "favorite"
    }
}
 */
    
            
    
/**
@sample Python Basic TreeView
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "Center,ScrollY,FillXY")

    items = {
        "Group 1": {
            "Item 1": "",
            "Item 2": "",
            "Item 3": ""
        },
        "Group 2": {
            "Item 1": "",
            "Item 2": "",
            "Item 3": ""
        },
        "Applications": {
            "Editor": "",
            "Productivity": "",
            "Social Media": {
                "TikTok": "",
                "YouTube": "",
                "Meta": {
                    "Facebook": "",
                    "Instagram": "",
                    "Whatsapp": "",
                    "Messenger": ""
                }
            }
        }
    }

    trv = ui.addTreeView(main, items, "Primary")
    trv.setMargins(0, 5, 0, 0, "rem")
    trv.setOnTouch(onTouch)

def onTouch(value, path):
    ui.showPopup("Value: " + value + " Path: " + path)
 */
    
            