// ------------- HEADER SECTION -------------


/** # addTreeView #
 * @abbrev trv
 * @brief addTreeView
 * Adds a TreeView component into your app. A tree view is best use in file system navigation.
 * $$ trv = ui.addTreeView(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the TreeView component.
 * @param {obj} [list] An object of the treeview items. See example below.
 * @param {str} [options] A comma separated TreeView options.
 * @param {num} [width] Fraction of the screen width.
 * @param {num} [height] Fraction of the screen height.
 * @returns uio-TreeView
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

/** @extern cornerRadius */

/** @extern disabled */

/** @extern fontFile */

/** @extern height */

/** @extern isVisible */

/** @extern left */

/** ### list
 * @prop
 * Sets or returns the list object.
 * @returns obj
 */


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

/** ### value
 * @prop
 * Returns the selected item of the TreeView.
 * @returns str
 */


/** @extern visibility */

/** @extern width */

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
