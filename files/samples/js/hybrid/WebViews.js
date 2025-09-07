
//Main class for the app
class Main extends App 
{
    //Called when app starts.
    onStart()
    {
        //Add main layout and set default child margins.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
        this.layMain.setChildMargins( .02, .01, .02, .01 )
    
        //Add webview.
        this.web = ui.addWebView( this.layMain, "https://droidscript.org" , "", .95, .9 )
    
        //Add a navigation button.
        this.btnNavigate = ui.addButton( this.layMain, "Load News", "primary" )
        this.btnNavigate.setOnTouch( ()=>{ this.web.loadUrl("https://droidscript.org/news-2") } )
    }
}
