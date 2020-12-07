You can create a control to display local or remote web pages in your App using the **CreateWebView** method.
If you are loading remote web pages, then you might want to use the **SetOnProgress** method to set the name of a callback function that you want called to report the progress of loading the page.

You can use the **LoadUrl** method to load an internal or external web page or the **LoadHtml** method to load text directly from within your App.
<js>web.LoadUrl( url, options );</js>
<js> web.LoadHtml( html, baseFolder, options );</js>

If you need to, you can use the **Execute** method to execute JavaScript code within the WebView.
<js>web.Execute( text );</js>