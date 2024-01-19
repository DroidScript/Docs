
//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )
    lay.SetChildMargins( 0.02, 0.02, 0.02, 0.02 )

    //Create some text.
    txt = app.AddText( lay, "Text" )
    txt.SetTextSize( 22 )
    
    //Create an image with width of 0.1 x screen width.
    img = app.AddImage( lay, "/Sys/Img/Icon.png", 0.1 )
    img.SetOnTouchDown( img_OnTouchDown )
  
    //Create a button.
    btn = app.AddButton( lay, "Button" )
    btn.SetOnTouch( btn_OnTouch )
    
    //Create a toggle button.
    tgl = app.AddToggle( lay, "Toggle Button" )
    tgl.SetOnTouch( tgl_OnTouch )
  
    //Create a check box.
    chk = app.AddCheckBox( lay, "Check Box" )
    chk.SetOnTouch( chk_OnTouch )

    //Create spinner.
    spin = app.AddSpinner( lay, "Spinner,A,B,C" )
    spin.SetOnTouch( spin_OnChange )
    
    //Create an text edit box.
    edt = app.AddTextEdit( lay, "Text Edit", 0.6 )
    
    //Create a list box.
    lst = app.AddList( lay, "Fred,Bill,Jim", 0.6, 0.2 )
    lst.SetOnTouch( lst_OnTouch )
    lst.SetOnLongTouch( lst_OnLongTouch )
    
    //Create a seek bar.
    skb = app.AddSeekBar( lay, 0.8 )
    skb.SetOnTouch( skb_OnTouch )
    skb.SetRange( 1.0 )
    skb.SetValue( 0.5 )
    
    //Add layout to app.    
    app.AddLayout( lay )
}

//Handle we user touches the image.
function img_OnTouchDown( ev )
{
    //Display the x y posn within image.
    var x = ev.x[0];  
    var y = ev.y[0];
    app.ShowPopup( "Image: " + x + ", " + y )
}

//Called when user touches our button.
function btn_OnTouch()
{
    app.ShowPopup( "Button pressed" )
}

//Called when user touches check box.
function chk_OnTouch( isChecked ) 
{
    app.ShowPopup( "Checked = " + isChecked )
}

//Called when user touches our toggle button.
function tgl_OnTouch( isChecked )  
{
    app.ShowPopup( "Checked = " + isChecked )
}

//Called when user changes the selection.
function spin_OnChange( item )
{
    app.ShowPopup( "Item = " + item )
}

//Called when user touches a list item.
function lst_OnTouch( item )  
{
    app.ShowPopup( "Item = " + item )
}

//Called when user long-touches a list item.
function lst_OnLongTouch( item )  
{
    app.ShowPopup( "Long Touch = " + item )
}

//Called when seek bar is touched.
function skb_OnTouch( value )
{
    app.ShowPopup( "Value = " + value )
}