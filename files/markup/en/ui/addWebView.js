
/** # WebView
 * @abbrev web
 * A WebView in mobile development is a component that allows embedding web content within an application.
 * @img(img1.png)
 * @jdocs It enables the display of web pages or web-based features, providing seamless integration of online content into mobile apps. Add a webview into your app using the `addWebView` method like this:
 * $$ web = ui.addWebView(parent, url, options, width, height) $$
 * @param {Object} parent The parent layout where to add the WebView component.
 * @param {String} url The url of the website.
 * @param {String} options A comma separated options for WebView. Values can be `NoScrollBar`, 
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object WebView
 */

ui.addWebView = function(parent, url, options, width, height)
{
    return new ui.WebView(parent, url, options, width, height)
}

ui.WebView = class extends ui.Control
{
	constructor(parent, url, options, width, height)
	{
	    super( parent, width, height, options, "WebView" );
	    this._url = url || "about:blank";
        this.window = null;
        this.document = null;
        this._blockUrls = [];
        this._ctl = document.createElement( "iframe" )
	    this._render();
	}
	
	//--- INVISIBLE METHODS --------------------------
    _initProps() {}
    
    _error( event ) {
        if( this._errorUrl ) this._ctl.src = this._errorUrl;
        else this.html=`<!DOCTYPE html><html><head><title>Error Page</title><style>body{font-family:Arial,sans-serif;background-color:#f5f5f5;margin:0;padding:0}.container{display:flex;align-items:center;justify-content:center;height:100vh;text-align:center}.error-code{font-size:72px;color:#333;margin-bottom:16px}.error-message{font-size:24px;color:#777}</style></head><body><div class="container"><div><h1 class="error-code">403</h1><p class="error-message">${(event.message||"Page Not Found")}</p></div></div></body></html>`;
        if( this._onError ) this._onError(event.message);
    }

    _progress( event ) {
        if( this._onProgress ) {
            const value = Math.floor((event.loaded / event.total) * 100);
            this._onProgress( value );
        }
    }

    _clickEvent( event ) {
        if( this.document ) {
            this.document.addEventListener('click', event => {
                var targetLink = event.target;
                if (targetLink.tagName === 'A') {
                    if( this._onUrl ) this._onUrl( targetLink.getAttribute("href") );
                }
            });
        }
    }
	
	//Draw the HTML element to the DOM
	_render()
	{
        //electron: this._ctl = document.createElement( "webview" )
        
        
        this._ctl.style.width = "100%";
        this._ctl.style.height = "100%";
        this._ctl.style.border = "none";

        // disable security
        // this._ctl.sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation allow-modals allow-pointer-lock allow-presentation"

        // remove scroll bar if `noscrollbar` option is passed
        if( this._options.includes("noscrollbar") ) this._ctl.classList.add("no-scroll-bar");

        this._ctl.onload = e => {
            this.window = this._ctl.contentWindow;
            this.document = this.window.document;

            // blocked urls
            var currURL = this.window.location.href;
            let isBlocked = false;
            this._blockUrls.forEach(m => { if( currURL.startsWith(m) ) isBlocked = true; });
            if( isBlocked ) { this._error({message: "URL is blocked!"}); return; }

            if( this._onload ) this._onload( e );
            
            this._clickEvent();
        }

        this._ctl.onerror = e => {
            alert( e );
        }

        // this._ctl.onerror = function( ev ) {
        //     console.log( ev );
        // }

        // this._ctl.onprogress = function( ev ) {
        //     console.log( ev );
        // }

        this._ctl.src = this._url;

        if( this._div ) this._div.appendChild( this._ctl );
	}
    
    /** ## Properties
     * Here are the setter and getter properties of the WebView Component.
     * @prop {String} url Sets or returns the url of the webview.
     * @prop {String} html Setst or returns the html loaded in the iframe.
     * @prop {String} errorPage Sets or returns the redirect url when an error occur.
     * @prop {Number} textZoom Sets or returns the text zoom of the page loaded in the web view.
     * @prop {Object} window A reference to the webview's window object.
     * @prop {Object} document A reference to the webview's window document object.
     * @prop {Array} blockUrls Sets or returns the list of blocked urls.
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
     * Here are the available methods for the WebView Component.
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

    loadUrl( url ) {
        //electron: this._ctl.loadURL( url ) 
        this._url = url
        this._ctl.src = url
        if( this._url ) this.E = this._ctl.contentWindow
    }
    set url( url ) {
        this._url = url
        this._ctl.src = this._url
    }
	get url() { return this._url }

    /** ### setOnLoad
     * Adds a callback handler for onload event.
     * $$ web.setOnLoad( callback ) $$
     * @param {Function} callback The callback function.
     */
    setOnLoad( callback ) { this._onload = callback }
 
    setOnError( callback ) { this._onError = callback; }

    /** ### setOnUrl
     * Define a callback function which is called when the user clicked a link.
     * $$ web.setOnUrl( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} url The new url to navigate.
     */
    setOnUrl( callback ) { this._onUrl = callback; }

    setOnProgress( callback ) { this._onProgress = callback; }

    set html( html ) { this._ctl.srcdoc = html; }
    get html() { return this._ctl.srcdoc || ""; }

    set errorPage( url ) { this._errorUrl = url; }
    get errorPage() { return this._errorUrl; }

    set textZoom( zoom ) {
        this._textZoom = zoom;
        var iframeBody = this.document.body;
        iframeBody.style.zoom = (zoom * 100) + '%';
    }
    get textZoom() { return this._textZoom; }

    /** ### stop
     * Stops any web loading.
     * $$ web.stop() $$
     */
    stop() { this.window.stop(); }

    /** ### reload
     * Reloads the current page.
     * $$ web.reload() $$
     */
    reload() { this.window.reload(); }

    /** ### print
     * Print current page via the builtin android printer dialog.
     * $$ web.print() $$
     */
    print() { this.window.print(); }

    set blockUrls( urls ) { this._blockUrls = urls; }
}

/* --- parent_methods here ----- */

/* ## Examples */

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