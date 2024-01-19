// ------------- HEADER SECTION -------------


/** # addWebView #
 * @abbrev web
 * @brief addWebView
 * Adds a webview into your app. A webview is a component where you can display a website into your app layout.
 * $$ web = ui.addWebView(parent, url?, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the WebView component.
 * @param {str} [url] The url of the website.
 * @param {str_com} [options]
 * @param {num} [width] Fraction of the parent width.
 * @param {num} [height] Fraction of the parent height.
 * @returns uio-WebView
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** @extern backColor */

/** @extern backImage */

/** ### blockUrls
 * @prop
 * Sets or returns the list of blocked urls.
 * @returns lst
 */


/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** @extern cornerRadius */

/** @extern disabled */

/** ### document
 * @prop
 * A reference to the webview`s window document object.
 * @returns obj
 */


/** ### errorPage
 * @prop
 * Sets or returns the redirect url when an error occur.
 * @returns str
 */


/** @extern fontFile */

/** @extern height */

/** ### html
 * @prop
 * Setst or returns the html loaded in the iframe.
 * @returns str
 */


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

/** ### textZoom
 * @prop
 * Sets or returns the text zoom of the page loaded in the web view.
 * @returns num
 */


/** @extern top */

/** @extern type */

/** ### url
 * @prop
 * Sets or returns the url of the webview.
 * @returns str
 */


/** @extern visibility */

/** @extern width */

/** ### window
 * @prop
 * A reference to the webview`s window object.
 * @returns obj
 */


/** ### setOnLoad ###
 * @brief setOnLoad
 * Adds a event handler for onload event
 *
 * The example above will call the function `Hello` defined in the WebView passing
 * the three arguments which is a text, number and a boolean
 * $$ web.setOnLoad(callback) $$
 * @param {fnc_json} callback {}
 */


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
@sample EnjineIO homepage
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Create a webview and load the EnjineIO homepage
        this.web = ui.addWebView(this.main, "https://enjine.io/", "", 0.9, 0.9)

        // Add a callback handler when the website is loaded
        this.web.setOnLoad( this.onLoad )
    }

    onLoad()
    {
        ui.showPopup( "Website is loaded!" )
    }
}
 */



/**
@sample Call a function inside the webview
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Create a webview and pass 
        this.web = ui.addWebView(this.main, "", "", 0.9, 0.7)

        // Add a callback handler when the page is loaded
        this.web.setOnLoad( this.onLoad )

        // Load a webpage from a string
        this.web.html = '<html>' +
        '<head>' +
            '<script>' +
                'function callFunc( name ) {' +
                    'alert("Hi " + name + " webview!")' +
                '}' +
            '<\/script>' +
        '<\/head>' +
        '<body>' +
            '<h2>This is an html.<\/h2>' +
        '<\/body>' +
        '<\/html>';
    }

    onLoad()
    {
        // Call the function `callFunc` inside the webpage
        // when the page is loaded
        var x = this.web.window.callFunc( "John Doe" )
    }
}
 */



/**
@sample Getting returned values from a function in a webview
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Create a webview and pass 
        this.web = ui.addWebView(this.main, "", "", 0.9, 0.7)

        // Add a callback handler when the page is loaded
        this.web.setOnLoad( this.onLoad )

        // Load a webpage from a string
        this.web.html = '<html>' +
        '<head>' +
            '<script>' +
                'function getProduct(num1, num2)' +
                '{' +
                    'return num1 * num2' +
                '}' +
            '<\/script>' +
        '<\/head>' +
        '<body>' +
            '<h2>Get some product here!<\/h2>' +
        '<\/body>' +
        '<\/html>';
    }

    onLoad()
    {
        // Call the function `getProduct` inside the webview
        // when the page is loaded and display the answer
        var prod = this.web.window.getProduct(2, 3)

        ui.showPopup( "The product is " + prod )
    }
}
 */



/**
@sample Manipulate dom inside the webview
class Main extends App
{
    onStart()
    {
        this.loaded = false;
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Create a webview and pass 
        this.web = ui.addWebView(this.main, "", "", 0.7, 0.5)

        // Add a callback handler when the page is loaded
        this.web.setOnLoad( this.onLoad )

        // Load a webpage from a string
        this.web.html = '<html>' +
        '<head>' +
        '</head>' +
        '<body>' +
            '<h2 id="my-text">Hi from webview!</h2>' +
        '</body>' +
        '</html>';

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Change background color")
        this.btn.setOnTouch( this.onTouch )
    }

    onLoad()
    {
        this.loaded = true;
    }

    onTouch()
    {
        // Check first if webview is loaded
        if( this.loaded )
        {
            // Get a reference to the document object of the webview
            const dom = this.web.document

            // or `const dom = this.web.window.document`

            // Set the background-color of the body to green
            dom.body.style.backgroundColor = "green"

            // Get a reference to the h2 element by its id
            let h2 = dom.getElementById("my-text")

            // Set the text
            h2.innerText = "New text from parent!"

            // Set the text color to white
            h2.style.color = "white"
        }
        else
            ui.showPopup( "Webview is not yet loaded!" )
    }
}
 */



/**
@sample Python EnjineIO homepage
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    web = ui.addWebView(main, "https://enjine.io/", "", 0.9, 0.9)
    web.setOnLoad(onLoad)

def onLoad():
    ui.showPopup("Website is loaded!")
 */



/**
@sample Python Call a function inside the webview
from hybrid import ui
from native import app

def OnStart():
    global web
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    web = ui.addWebView(main, "", "", 0.9, 0.7)
    web.setOnLoad(onLoad)
    web.html = '''
        <html>
        <head>

                function callFunc(name) {
                    app.Alert("Hi " + name + " webview!")
                }

        </head>
        <body>
            <h2>This is an html.</h2>
        </body>
        </html>
    '''

def onLoad():
    x = web.window.callFunc("John Doe")
 */



/**
@sample Python Getting returned values from a function in a webview
from hybrid import ui

def OnStart():
    global web
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    web = ui.addWebView(main, "", "", 0.9, 0.7)
    web.setOnLoad(onLoad)
    web.html = '''
        <html>
        <head>

                function getProduct(num1, num2) {
                    return num1 * num2
                }

        </head>
        <body>
            <h2>Get some product here!</h2>
        </body>
        </html>
    '''

def onLoad():
    prod = web.window.getProduct(2, 3)
    ui.showPopup("The product is " + str(prod))
 */



/**
@sample Python Manipulate dom inside the webview
from hybrid import ui

def OnStart():
    global loaded, web
    loaded = False
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    web = ui.addWebView(main, "", "", 0.7, 0.5)
    web.setOnLoad(onLoad)
    web.html = '''
        <html>
        <head></head>
        <body>
            <h2 id="my-text">Hi from webview!</h2>
        </body>
        </html>
    '''
    btn = ui.addButton(main, "Change background color")
    btn.setOnTouch(onTouch)

def onLoad():
    global loaded
    loaded = True

def onTouch(event):
    if loaded:
        dom = web.document
        dom.body.style.backgroundColor = "green"
        h2 = dom.getElementById("my-text")
        h2.innerText = "New text from parent!"
        h2.style.color = "white"
    else:
        ui.showPopup("Webview is not yet loaded!")
 */
