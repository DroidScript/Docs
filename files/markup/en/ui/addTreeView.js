/** # TreeView
 * @abbrev trv
 * A TreeView is a hierarchical representation of data, often used to display nested categories or organized information.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs A tree view is best use in file system navigation. Add a treeview into your app using the `addTreeView` method like this:
 * $$ trv = ui.addTreeView(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the TreeView component.
 * @param {Object} [list] An object of the treeview items. See example below.
 * @param {String} [options] A comma separated options. Values can be `MultiSelect`.
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-TreeView
 */


/**
```
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
```
 */


/**
 * The properties of the list object will be the name of the item or the group.
 * If you add a string value to the list object properties, it will be treated as an icon.
 * See example below
 */


/** #Example - Items with icons
var items = {
    "Folders": {
        "Music": "music_note",
        "Photos": "photo",
        "Favorites": "favorite"
    }
}
 */


    /** ## Properties
     * Here are the available setter and getter properties of the TreeView Component.
     * @prop {Object} list Sets or returns the list object.
     * @prop {String} value Returns the selected item of the TreeView.
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
     * Here are the available methods of the TreeView Component.
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


    /** ### setOnTouch
     * Add a on touch handler to the TreeView item when click.
     * $$ trv.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} value The selected tree item. @arg {String} path The complete path of the tree item.
     */


    /** ### setList
     * Updates the list items of the TreeView component.
     * $$ trv.setList( obj ) $$
     * @param {Object} obj The list object of the treeview items. See example above.
     */


    /** ### addItem
     * Add a tree items to the tree view.
     * $$ trv.addItem( name, obj ) $$
     * @param {String} name The label text for the new item.
     * @param {Object} obj See list object for more info.
     */


    /** ### getItem
     * Returns the list items object of a given parent tree item name.
     * $$ trv.getItem( name ) $$
     * @param {String} name The parent name of the tree items.
     * @returns Object
     */


/* --- parent_methods here ----- */


/* ## Examples */


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


