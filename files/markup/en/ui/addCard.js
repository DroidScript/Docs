/** # Card
 * @abbrev crd
 * They are surfaces in material design that display content and actions on a single topic.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Create a card using the initialization below
 * $$ var crd = ui.addCard(parent, content, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the card.
 * @param {Object} content A JSON object representing the contents of the card. Passing the card contents on initialization makes your app layout loads faster than setting each property individually.
 * @param {String} options A comma separated option for the card.
 * @param {Number} width Fraction of the parent width.
 * @param {Number} height Fraction of the parent height.
 * @returns uio-Card
 */


/**
 * @jdocs <h4>Content properties</h4>
 * @jdocs `headerTitle` [string] : Card header title.<br>`headerSubtitle` [string] : Card header subtitle or subheader.<br>`headerAvatar` [string] : Card header avatar. Can be a single character or a path to an image.<br>`headerAction` [string] : Card header action. A material icon font.<br>`media` [string] : A path to an image.<br>`bodyTitle` [string] : The title of the card content.<br>`bodyText` [string] : The long description of the card.<br>`actions` [array] : List of icon buttons. These can be a list of material-icon fonts if `actionType` is an `"icon"`.<br>`actionType` [array] : The type of action. Can be a `"button"` or `"icon"`.<br>`onAction` [function] : Callback handler when card actions are clicked. Refer to `setOnAction` method for arguments.<br>`onHeaderAction` [function] : Callback handler when header action is clicked. Refer to `setOnHeaderAction` method for arguments.
 */


/**
@ds
<js>
{
    headerTitle: string, // card header title
    headerSubtitle: string, // card header subtitle or subheader
    headerAvatar: string, // card header avatar. can be a single character or a path to an image
    headerAction: string, // card header action. A material icon font
    media: string, // path to an image
    bodyTitle: string, // title of the card content
    bodyText: string, // long description of the card
    actions: array, // list of icon buttons. can be a list of material-icon fonts if actionType is an "icon"
    actionType: string, // type of action. can be a "button" or "icon"
    onAction: function, // callback when card actions are clicked. refer to setOnAction method for arguments
    onHeaderAction: function // callback when header action is clicked. refer to setOnHeaderAction method for arguments
}
</js>
 */


    /** ## Properties
     * These are the available setter and getter properties for the Card component.
     * @prop {String} headerTitle Sets or returns the card header title.
     * @prop {String} headerSubtitle Sets or returns the card header subheader or subtitle.
     * @prop {String} headerAvatar Sets or returns the card header avatar. Can be a character or a path to an image.
     * @prop {String} headerAction Sets or returns the card header action.
     * @prop {String} headerAvatarColor Sets or returns the card header avatar color in css supported color format.
     * @prop {String} media Sets or returns the card media.
     * @prop {String} bodyTitle Sets or returns the title of the card content.
     * @prop {String} bodyText Sets or returns the text of the card content.
     * @prop {Array} actions Sets or returns the list of card actions. If `actionType` is an `"icon"`, provide a list of material icon fonts.
     * @prop {Object} layout Returns the div element of the card content. It is useful when you want to add ui components into the content of the card.
     * @prop {Object} actionType Sets or returns the type of actions in the card. Values can be `"button"` or `"icon"`. If `"icon"` please provide a material icon actions.
     * @prop {Number} cornerRadius Sets or returns the corner radius.
     * @prop {Number} elevation Sets or returns the elevation of the card.
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
     * These are the methods for `Card` component.
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


    /** ### addHeaderItems
     * Add header items to the card. Using this method is faster than setting the individual header property.
     * $$ crd.addHeaderItems(title, subtitle, avatar, action) $$
     * @param {String} title The title of the card.
     * @param {String} subtitle The subheader of the card.
     * @param {String} avatar Can be a char or a path to an image.
     * @param {String} action Material icon font.
     */


    /** ### addBodyItems
     * Add card body items. Using this method is faster than setting the individual.
     * $$ crd.addBodyItems(title, text) $$
     * @param {String} title The title of the content of the card.
     * @param {String} text The description of the card.
     */


    /** ### setOnAction
     * Add a callback function to be called when a card action is click.
     * $$ crd.setOnAction( cb ) $$
     * @param {Function} cb The callback function. ---> @arg {String} icon Material icon. @arg {Number} index The index of the action.
     */


    /** ### setOnHeaderAction
     * Add a callback function to be called when the header action icon is click.
     * $$ crd.setOnHeaderAction( cb ) $$
     * @param {Function} cb The callback function.
     */


/* --- parent_methods here ----- */


/** ## Samples */


/**
@sample Basic Card
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY");

        // initialize the content of the card
        var content = {
            bodyTitle: "Lizard",
            bodyText: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            actions: ["Read more"]
        };

        // Create a card by passing the content object
        this.crd = ui.addCard(this.main, content, "primary", 0.8);
        
        // Add a callback handler when the action is click
        this.crd.setOnAction( this.onAction )
    }

    onAction(text, i)
    {
        ui.showPopup( text );
    }
}
 */


/**
@sample Card with media
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // initialize the content of the card
        var content = {
            media: "https://picsum.photos/300/180",
            bodyTitle: "Card",
            bodyText: "They are surfaces in material design that display content and actions on a single topic. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.",
            actions: ["favorite", "share"],
            actionType: "icon"
        }

        // Create a card by passing the content object
        this.crd = ui.addCard(this.main, content, "primary", 0.8)
        
        // Add a callback handler when the action is click
        this.crd.setOnAction( this.onAction )
    }

    onAction(text, i)
    {
        ui.showPopup( text );
    }
}
 */


/**
@sample Card with header
class Main extends App
{
   onStart()
   {
       // Create a fullscreen layout with objects vertically centered
       this.main = ui.addLayout("main", "Linear", "VCenter,FillXY,ScrollY")

       // initialize the content of the card with header information
       var content = {
           headerTitle: "DroidScript.org",
           headerSubtitle: "Posted on November 16, 2023",
           headerAvatar: "D",
           headerAction: "more_vert",
           media: "https://picsum.photos/300/180",
           bodyTitle: "Card",
           bodyText: "They are surfaces in material design that display content and actions on a single topic. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.",
           actions: ["favorite", "share"],
           actionType: "icon"
       }

       // Create a card by passing the content object
       this.crd = ui.addCard(this.main, content, "primary", 0.94)
       this.crd.headerAvatarColor = "green"
       
       // Add a callback handler when the action is click
       this.crd.setOnAction( this.onAction )

       // Add a callback handler when header action is click
       this.crd.setOnHeaderAction( this.onHeaderAction )
   }

   onAction(text, i)
   {
       ui.showPopup( text );
   }

   onHeaderAction()
   {
       ui.showPopup( "Header action is click" );
   }
}
 */


/**
@sample Card with additional controls
class Main extends App
{
   onStart()
   {
       // Create a fullscreen layout with objects vertically centered
       this.main = ui.addLayout("main", "Linear", "VCenter,FillXY,ScrollY")

       // initialize the content of the card with header information
       var content = {
           headerTitle: "DroidScript.org",
           headerSubtitle: "Posted on November 16, 2023",
           headerAvatar: "D",
           headerAction: "more_vert",
           media: "https://picsum.photos/300/180",
           bodyTitle: "UI Components",
           bodyText: "This is a card with additional UI Components as content.",
           actions: ["favorite", "share"],
           actionType: "icon"
       }

       // Create a card by passing the content object
       this.crd = ui.addCard(this.main, content, "primary", 0.96)
       this.crd.headerAvatarColor = "green"
       
       // Add a callback handler when the action is click
       this.crd.setOnAction( this.onAction )

       // Add a callback handler when header action is click
       this.crd.setOnHeaderAction( this.onHeaderAction )

       // Add a UI Button
       this.btn = ui.addButton(this.crd.layout, "Button", "Primary");
       this.btn.margins = [0, "1rem", 0, "1rem"];

       // Add a text component
       this.txt = ui.addText(this.crd.layout, "This is a UI component text added to a card layout. Below is a checkbox component.");

       // Add a checkboxgroup component
       this.ckb = ui.addCheckboxGroup(this.crd.layout, "Mango,Apple,Orange", "Left,Secondary", 1)
       this.ckb.label = "Select fruits"
   }

   onAction(text, i)
   {
       ui.showPopup( text );
   }

   onHeaderAction()
   {
       ui.showPopup( "Header action is click" );
   }
}
 */


