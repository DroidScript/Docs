
//Force this app to portrait mode.
cfg.Portrait

//Main class for the app
class Main extends App
{
    //Called when app starts.
    onStart()
    {
        //Add main layout and set default child margins.
        this.layMain = ui.addLayout( "main", "linear", "fillxy,vcenter" )
        this.layMain.setChildMargins( .02, .02, .02, .02 )

        //Add some text.
        this.txt = ui.addText( this.layMain, "My Hybrid app")

        //Add a button with primary color.
        this.btn = ui.addButton( this.layMain, "My Button", "primary" )
        this.btn.setOnTouch( ()=>{ app.Vibrate( "0,100,30,100" ); } )
    }
}
