// ------------- HEADER SECTION -------------


/** # addWebView #
 * @abbrev web
 * @brief addWebView
 * 
 * $$ web = ui.addWebView(parent, url, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the WebView component.
 * @param {str} url The url of the website.
 * @param {str_com} options 
 * @param {num} width Fraction of the parent width.
 * @param {num} height Fraction of the parent height.
 * @returns uio-WebView
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a webview into your app. A webview is a component where you can display a website into your app layout.

### Properties
These are the setter and getter properties for the addWebView Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>blockUrls:"lst:'Sets or returns the list of blocked urls.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>document:"obj:'A reference to the webview`s window document object.'"</smp>
<smp noinl>errorPage:"str:'Sets or returns the redirect url when an error occur.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>html:"str:'Setst or returns the html loaded in the iframe.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>textZoom:"num:'Sets or returns the text zoom of the page loaded in the web view.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>url:"str:'Sets or returns the url of the webview.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
<smp noinl>window:"obj:'A reference to the webview`s window object.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


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
    
            