
//Make this a Hybrid app.
cfg.Hybrid

//Called when application starts.
function OnStart()
{
    //Add main layout and set default child margins.
    layMain = ui.addLayout( "main", "linear", "fillxy" )
    layMain.setChildMargins( .02, .01, .02, .01 )

    //Add webview.
    web = ui.addWebView( layMain, "https://droidscript.org" , "", .95, .9 )

    //Add a navigation button.
    btnNavigate = ui.addButton( layMain, "Load News", "primary" )
    btnNavigate.setOnTouch( function(){ web.loadUrl("https://droidscript.org/news-2") } )
}
