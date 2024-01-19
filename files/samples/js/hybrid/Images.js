
//Main class for the app
class Main extends App 
{
    //Called when app starts.
    onStart()
    {
        //Add main layout and set default child margins.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
        this.layMain.setChildMargins( .02, .02, .02, .02 )
    
        //Add an image to main layout and handle touch events.
        //(local image files can be used too eg. Img/robot.png)
        var url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
        this.img = ui.addImage( this.layMain, url, "", null, 0.3 )
        this.img.setCornerRadius( 20, 20, 20, 20, "px" )
        this.img.setOnTouch( this.img_OnTouch )
    }

    //Handle touching the image.
    img_OnTouch()
    {
        ui.showPopup( "Mango" )
        app.Vibrate( "0,100,30,100,50,300" );
    }
}
