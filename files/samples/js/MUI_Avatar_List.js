
//Configure for Material UI and light theme.
cfg.MUI, cfg.Light

//Called when application is started.
function OnStart() 
{
    //Create main layout.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )
    
    //Create array of demo data for list
    var data = [
        {title: "Arya Stark", body: "Some body text here.", rightIcon: "more_vert"},
        {title: "John Snow", body: "Some body text here.", image:"/Sys/demos/mui/Img/1.png", rightIcon: "more_vert"},
        {title: "Sansa Stark", body: "Some body text here.", image:"Img/1.png", rightIcon: "more_vert"},
        {title: "Rob Stark", body: "Some body text here.", rightIcon: "star"},
    ];
    
    //Create an Avatar list.
    lst = MUI.CreateListModern( data, 1, 0.8, "Avatar,Selectable" )
    lst.SetOnSelect( lst_OnSelect )
    lst.SetOnTouch( lst_OnTouch )
    lst.SetControlOnTouch( (i)=>{app.ShowPopup(i)} )
    lay.AddChild( lst )
   
    //Create horizontal layout for buttons.
    var layHoriz = app.CreateLayout( "Linear", "Horizontal" )
    lay.AddChild(layHoriz)
    
    //Create an Add button
    layHoriz.SetSize(1, null)
    var btnAdd = MUI.CreateButtonRaised( "ADD", 0.33 )
    btnAdd.SetOnTouch( btnAdd_OnTouch )
    layHoriz.AddChild( btnAdd )
    
    //Create a Shift button.
    var btnShift = MUI.CreateButtonRaised( "SHIFT", 0.33 )
    btnShift.SetOnTouch( btnShift_OnTouch )
    layHoriz.AddChild( btnShift )
    
    //Create a Pop button.
    var btnPop = MUI.CreateButtonRaised( "POP", 0.33 )
    btnPop.SetOnTouch( btnPop_OnTouch )
    layHoriz.AddChild( btnPop )
    
     //Add layout to app.    
    app.AddLayout( lay )
}

//Handle list item selection.
function lst_OnSelect(i, val) 
{
    selected = lst.GetSelectedItems()
    app.ShowPopup(selected.length+" Selected")
}

//Handle list item touch.
function lst_OnTouch(i, t) 
{
    app.ShowPopup(t)
    lst.SetUnread(i, false)
}

//Handle Addbutton.
function btnAdd_OnTouch()
{
    var data = {title: "Arya Stark", body: "Some body text here.", rightIcon: "more_vert"}
    lst.AppendItem(data, true)
}

//Handle Shift button.
function btnShift_OnTouch()
{ 
    var data = lst.GetList()
    if( data.length > 0 ) lst.ShiftItem() 
}

//Handle Pop button.
function btnPop_OnTouch()
{ 
    var data = lst.GetList()
    if( data.length > 0 ) lst.PopItem()
}

