
//Make this a Hybrid app.
cfg.Hybrid

//Called when application starts.
function OnStart()
{
    //Add main layout and set default child margins.
    layMain = ui.addLayout( "main", "linear", "fillxy" )
    layMain.setChildMargins( .02, .01, .02, .01 )

    //Add a Dark/light theme icon button.
    btnTheme = ui.addButton( layMain, "brightness_5", "icon,primary" )
    btnTheme.setOnTouch( btnTheme_onTouch )

    //Add some text.
    txt = ui.addText( layMain, "Light / Dark theme")

    //Add a button with primary color.
    btn = ui.addButton( layMain, "My Button", "primary" )

    //Add a SwitchGroup.
    var lst = "Bluetooth:bluetooth,Wi-fi:wifi"
    swg = ui.addSwitchGroup( layMain, lst, "secondary", platform.mobile?.6:.3 )
    swg.setValueByIndex( 1, true )
    swg.setLabel("Wireless")

    //Add a RadioGroup.
    rag = ui.addRadioGroup( layMain, "Banana,Mango,Orange", "primary" )
    rag.setLabel("Flavor")
}

//Called when button is pressed.
function btnTheme_onTouch()
{
    if( !ui.theme.dark ) ui.setTheme( "dark" )
    else ui.setTheme( "light" )
}

