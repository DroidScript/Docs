// ------------- HEADER SECTION ------------- 


/** # Func #

 * Call main app functions from inside a webview
 * $$ app.Func(name, args...) $$ 
 * @param {string} name 
 * @param {all} args... 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample WebView Greeter
var html = `
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <script src='file:///android_asset/app.js'></script>
</head>

<script>
function greetWeb(name) {
    app.ShowPopup("Hello " + name + ", I'm the WebView");
}
function greetApp() {
    app.Func("greetApp", "WebView");
}
function OnRequest(err, s) {
    alert(s.split("\\n").join("\\n"))
}
</script>

<input type="button" onclick="greetApp()" value="Greet App"/>
</html>
`

function OnStart()
{
    var lay = app.CreateLayout("linear", "FillXY,VCenter");

    web = app.AddWebView(lay, 1, 0.5);
    web.LoadHtml(html);

    var btn = app.AddButton(lay, "Greet WebView");
    btn.SetOnTouch(greetWeb);

    app.AddLayout(lay);
}

function greetApp(name) {
    app.ShowPopup("Hello " + name + ", I'm the App");
}
function greetWeb() {
    web.Func("greetWeb", "App");
}
 */
    
            