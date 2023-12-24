from native import app

#Called when application is started.
def OnStart():
    global lay, img, txtUrl
    #Set a light theme.
    SetTheme()

    #Create layout for controls.
    lay = app.CreateLayout( "Linear", "FillXY" )

    #Create icon label.
    lab = app.CreateText( "Icon" )
    lab.SetMargins( 0, 0.1, 0, 0 )
    lab.SetTextColor( "#4285F4" )
    lay.AddChild( lab )

    #Create horizontal layout.
    layHoriz = app.CreateLayout( "Linear", "Horizontal" )
    lay.AddChild( layHoriz )

    #Create a help button.
    btnHelp = CreateHelpButton( layHoriz, "icon" )
    btnHelp.SetMargins( 0.03, 0.01, 0.03, 0 )

    #Create icon image.
    portrait = app.GetOrientation()=="Portrait"
    img = app.CreateImage( "/Sys/Img/Hello.png", 0.2 if portrait else 0.1, -1 )
    img.SetMargins( 0.02, 0.02, 0.02, 0 )
    img.iconFile = "Img/Hello.png"
    layHoriz.AddChild( img )

    #Create a change button.
    btnIcon = app.CreateButton( "[fa-refresh]", -1, 0.1, "FontAwesome" )
    btnIcon.SetMargins( 0, 0.015, 0, 0 )
    btnIcon.SetTextSize( 18 )
    btnIcon.SetTextColor( "#555555" )
    layHoriz.AddChild( btnIcon )

    #Create 'url' label.
    lab = app.CreateText( "Web Address" )
    lab.SetMargins( 0, 0.04, 0, 0 )
    lab.SetTextColor( "#4285F4" )
    lay.AddChild( lab )

    #Create url help button.
    layUrl = app.CreateLayout( "Linear", "Horizontal" )
    lay.AddChild( layUrl )
    btnHelp = CreateHelpButton( layUrl, "url" )
    btnHelp.SetMargins( 0, 0, 0.01, 0 )

    #Create url text box.
    txtUrl = app.CreateTextEdit( "http://www.google.com", 0.65, -1, "SingleLine" )
    layUrl.AddChild( txtUrl )

    #Create url test button.
    btnTest = app.CreateButton( "[fa-play]", -1, 0.1, "FontAwesome" )
    btnTest.SetMargins( 0.01, 0, 0, 0 )
    btnTest.SetTextSize( 18 )
    btnTest.SetTextColor( "#555555" )
    layUrl.AddChild( btnTest )

    #Add layout to app.
    app.AddLayout( lay )

#Set the theme.
def SetTheme():
    theme = app.CreateTheme( "Light" )
    theme.SetButtonStyle( "#fafafa","#fafafa",5,"#999999",0,1,"#ff9000" )
    theme.SetTextColor( "#000000" )
    app.SetTheme( theme )

#Create help buttons.
def CreateHelpButton( lay, id ):
    global id
    btnHelp = app.CreateButton( "[fa-question]", -1, 0.1, "FontAwesome" )
    btnHelp.data.id = id
    btnHelp.SetSize( 40, 40, "dp" )
    btnHelp.SetTextSize( 12 )
    btnHelp.SetTextColor( "#4285F4" )
    btnHelp.SetOnTouch( btn_OnHelp )
    lay.AddChild( btnHelp )
    return btnHelp

#Show context help.
def btn_OnHelp():
    if this.data.id == "icon":
        txt = "This is the image that will be shown on phone and tablet home screens."
        pos = img.GetPosition("screen")
        app.ShowTip( txt, pos.left-0.35, pos.top+0.05, 7000, "Down" )
    elif this.data.id == "url":
        txt = "This is the address of your web site. You can copy and paste this from" + \
            " your phone or tablet browser, or type it directly in here. Press the play" + \
            " button to see what your finished app will look like."
        pos = txtUrl.GetPosition("screen")
        app.ShowTip( txt, pos.left-0.1, pos.top, 7000, "Down" )