
//Init variables.
var lay = null;
var themeName = "None";

//Called when application is started.
function OnStart()
{  
    //Create the layout.
    CreateLayout()
}

//Create all the App's controls.
function CreateLayout()
{
    //Destroy old layout (if exists).
    if( lay ) app.DestroyLayout( lay )
    
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Create some text.
    txt = app.CreateText( "Theme" )
    txt.SetTextSize( 16 )
    lay.AddChild( txt )
    
    //Create spinner.
    spin = app.CreateSpinner( "None,Dark,Light,Carbon,Material", 0.3 )
    spin.SetText( themeName )
    spin.SetOnTouch( spin_OnChange )
    lay.AddChild( spin )
    
    //Create some text.
    txt = app.CreateText( "Dialogs" )
    txt.SetMargins( 0, 0.04, 0, 0.02 )
    lay.AddChild( txt )
    
    //Create horizontal layout for dialog buttons.
    layHoriz = app.CreateLayout( "Linear", "Horizontal" )
    lay.AddChild( layHoriz )
    
    //Create a 'Custom Dialog' button.
    btnCust = app.CreateButton( "Custom" )
    btnCust.SetOnTouch( CustomDialog )
    layHoriz.AddChild( btnCust )
    
    //Create a 'List Dialog' button.
    btn = app.CreateButton( "List" )
    btn.SetOnTouch( ListDialog )
    layHoriz.AddChild( btn )
    
    //Create a 'YesNo Dialog' button.
    btn = app.CreateButton( "YesNo" )
    btn.SetOnTouch( YesNoDialog )
    layHoriz.AddChild( btn )
    
    //Create a 'Alert' button.
    btn = app.CreateButton( "Alert" )
    btn.SetOnTouch( AlertDialog )
    layHoriz.AddChild( btn )
    
    //Create a toggle button.
    tgl = app.CreateToggle( "Toggle Button" )
    tgl.SetMargins( 0, 0.02, 0, 0 )
    lay.AddChild( tgl )
  
    //Create a check box.
    chk = app.CreateCheckBox( "Check Box" )
    chk.SetMargins( 0, 0.02, 0, 0 )
    lay.AddChild( chk )

    //Create an text edit box.
    edt = app.CreateTextEdit( "Text Edit", 0.6, 0.1 )
    edt.SetMargins( 0, 0.02, 0, 0 )
    lay.AddChild( edt )
    
    //Create a list box.
    lst = app.CreateList( "Fred,Bill,Jim", 0.6, 0.2 )
    lst.SetMargins( 0, 0.03, 0, 0 )
    lay.AddChild( lst )
    
    //Create a seek bar.
    skb = app.CreateSeekBar( 0.8 )
    skb.SetRange( 1.0 )
    skb.SetValue( 0.5 )
    lay.AddChild( skb )
    
    //Add layout to app.    
    app.AddLayout( lay )
}

//Called when user changes the theme.
function spin_OnChange( item )
{
    themeName = item;
    
    //Create a theme
    if( themeName=="Dark" )
    {
        theme = app.CreateTheme( "Dark" )
        app.SetTheme( theme )
    }
    else if( themeName=="Light" )
    {
        theme = app.CreateTheme( "Light" )
        app.SetTheme( theme )
    }
     else if( themeName=="Carbon" )
    {
        theme = app.CreateTheme( "Dark" )
        theme.AdjustColor( -30, 0, 0 )
        theme.SetBackground( "/Res/drawable/pattern_carbon", "repeat" )
        theme.SetButtonOptions( "custom" )
        theme.SetButtonStyle( "#353535","#161616",2,"#222222",1,1,"#00E1B6" )
        theme.SetBtnTextColor( "#bbffffff" )
        theme.SetBackColor( "#99000000" )
        theme.SetDialogBtnColor( "#ff222222" )
        theme.SetDialogBtnTxtColor( "#ffffff" )
        theme.SetTitleHeight( 42 )
        app.SetTheme( theme )
    }   
    else if( themeName=="Material" )
    {
        theme = app.CreateTheme( "Light" )
        theme.AdjustColor( 35, 0, -10 )
        theme.SetBackColor( "#ffffffff" )
        theme.SetBtnTextColor( "#ffffffff" )
        theme.SetButtonOptions( "custom" )
        theme.SetButtonStyle( "#4285F4","#4285F4",2,"#999999",0,1,"#ff9000" )
        theme.SetCheckBoxOptions( "dark" )
		theme.SetTextEditOptions( "underline" )
        theme.SetDialogColor( "#ffffffff" )
        theme.SetDialogBtnColor( "#ffeeeeee" )
        theme.SetDialogBtnTxtColor( "#ff666666" )
        theme.SetTitleHeight( 42 )
        theme.SetTitleColor( "#ff888888" ) 
        theme.SetTitleDividerColor( "#ff0099CC" )
        theme.SetTextColor( "#ff666666" )
        app.SetTheme( theme )
    }    
    else if( themeName=="None" ) 
    {
        theme = app.CreateTheme( "Default" )
        app.SetTheme( theme )
    }
    
    //Recreate all controls.
    CreateLayout()
}

//Show a custom dialog with current theme.
function CustomDialog()
{
    dlg = app.CreateDialog( "Custom Dialog" )
    layDlg = app.CreateLayout( "linear", "vertical,fillxy,center" )
    dlg.AddLayout( layDlg ) 
    txt = app.CreateText( "Hello World", 0.6 )
    txt.SetMargins( 0, 0.02, 0, 0.02 )
    layDlg.AddChild( txt )
    lst = app.CreateList( "Fred,Bill,Jim", 0.8 )
    lst.SetMargins( 0, 0.02, 0, 0.02 )
    layDlg.AddChild( lst )
    edt = app.CreateTextEdit( "Hello World", 0.6 )
    edt.SetMargins( 0, 0.02, 0, 0.04 )
    layDlg.AddChild( edt )
    dlg.Show()
}

//Show a list dialog with current theme.
function ListDialog()
{
    dlg = app.CreateListDialog( "My Title", "Apples,Oranges,Bananas" )
    dlg.Show()
}

//Show an Alert dialog with current theme.
function AlertDialog()
{
    app.Alert( "Hi", "My Title" )
}

//Show a Yes/No dialog with current theme.
function YesNoDialog()
{
    dlg = app.CreateYesNoDialog( "Are you sure?" )
    dlg.Show()
}

