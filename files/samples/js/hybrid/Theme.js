
//Main class for the app
class Main extends App 
{
    //Called when app starts.
    onStart()
    {
        //Add main layout and set default child margins.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
        this.layMain.setChildMargins( .02, .04, .02, .01 )
    
        //Add a Dark/light theme icon button.
        this.btnTheme = ui.addButton( this.layMain, "brightness_5", "icon,primary" )
        this.btnTheme.setOnTouch( this.btnTheme_onTouch )
    
        //Add some text.
        this.txt = ui.addText( this.layMain, "Light / Dark theme")
    
        //Add a button with primary color.
        this.btn = ui.addButton( this.layMain, "My Button", "primary" )
    
        //Add a SwitchGroup.
        var lst = "Bluetooth:bluetooth,Wi-fi:wifi"
        this.swg = ui.addSwitchGroup( this.layMain, lst, "secondary", platform.mobile?.6:.3 )
        this.swg.setValueByIndex( 1, true )
        this.swg.setLabel("Wireless")
    
        //Add a RadioGroup.
        this.rag = ui.addRadioGroup( this.layMain, "Banana,Mango,Orange", "primary" )
        this.rag.setLabel("Flavor")
    }

    //Called when button is pressed.
    btnTheme_onTouch()
    {
        if( !ui.theme.dark ) ui.setTheme( "dark" )
        else ui.setTheme( "light" )
    }
}
