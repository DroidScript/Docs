
//Main class for the app
class Main extends App 
{
    //Called when app starts.
    onStart()
    {
        //Add main layout.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
    
        //Add tab control.
        this.tab = ui.addTabs( this.layMain, "Tab1,Tab2,Tab3", "", 1,1 )
        this.tab.setMargins( 0, 0.01, 0, 0 )
    
        //Get first tab's layout and set default margins for its children.
        this.layTab1 = this.tab.getLayout( "Tab1" )
        this.layTab1.setChildMargins( .02, .04, .02, .02 )
    
        //Add a button to the first tab with primary color.
        this.btnHello = ui.addButton( this.layTab1, "My Button", "primary" )
        this.btnHello.setOnTouch( this.btnHello_onTouch )
    }

    //Called when button is pressed.
    btnHello_onTouch()
    {
        ui.showPopup( "Hello World" )
    }
}