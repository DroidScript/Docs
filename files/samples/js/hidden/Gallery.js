
//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Show images in given folder.
    gal = new Gallery( lay, "/sdcard/Inspector", 1, 1 )
   
    //Add layout to app.    
    app.AddLayout( lay )
    
    //Do our own back key handling.
    app.EnableBackKey( false )
}

//Handle back key.
function OnBack()
{
    if( gal.IsViewerOpen() )
        gal.CloseViewer()
    else 
        app.Exit()
}

//Handle screen orientation changes.
function OnConfig()
{
    //Reload the gallery.
    gal.Load()    
}


//Gallery object.
function Gallery( lay, folder, width, height )
{
    //Public properties.
    this.lay = lay;
    this.folder = folder;
    this.width = width;
    this.height = height;
    
    //Private variables.
    var layFrame = null;
    
    //Load and display the image thumnails.
    this.Load = function()
    {
        //Remove any old image controls.
        if( layFrame ) lay.DestroyChild( layFrame )
        
        //Make sure thumbs folder exists.
        app.MakeFolder( folder + "/.thumbs" )
        //app.WriteFile( folder + "/.thumbs/.nomedia", "" )
        
        //Get list of jpg files in a folder.
        var list = app.ListFolder( folder,".jpg")
        
        //Calc size of thumbs, pics per row and margins.
        var orient = app.GetOrientation()
        var xmarg = width/100, ymarg = height/150;
        var picsPerRow = 2;
        var w = width/2 - xmarg*2;
        var h = height/5 - ymarg*2;
        
        //Adjust sizes for landscape mode.
        if( orient=="Landscape" ) { 
            xmarg = width/150, ymarg = height/100;
            picsPerRow=4; w = width/4 - xmarg*2; 
            h = height/3 - ymarg*2;
        }
        
        //Create frame layout so we can have 'layers'.
        layFrame = app.CreateLayout( "Frame", 1.0, 1.0 )
        lay.AddChild( layFrame )
        
        //Create scroller to scroll all pics.
        scroll = app.CreateScroller( width, height, "" )
        layFrame.AddChild( scroll )
        
        //Create viewer layout 'layer' above scroller.
        layView = app.CreateLayout( "Linear", "VCenter" )
        layView.SetSize( 1, 1 )
        layFrame.AddChild( layView )
        
        //Create vertical layout inside scroller.
        layPics = app.CreateLayout( "Linear", "Left" )
        scroll.AddChild( layPics )
            
        //Loop through all file names.
        for( var i=0; i<list.length; i++ )
        {
            //Create new horizontal layout after every 4th image.
            if( i==0 || i%picsPerRow==0 ) {
                layRow = app.CreateLayout( "Linear", "Horizontal" )
                layPics.AddChild( layRow )
            }
        
            //Ignore files with ~ at start.
            if( list[i].substr(0,1)!="~" )
            {
                //Check for thumbnail.
                var file = folder + "/" + list[i];
                var thumbFile = folder + "/.thumbs/" + list[i];
                thumbFile = thumbFile.replace( ".png", ".jpg" )
                
                //Load image or thumbnail.
                var img = null;
                if( app.FileExists( thumbFile ) ) 
                     img = app.CreateImage( thumbFile, w, h, "Resize,Async" )
                else {
                    img = app.CreateImage( file, w, h, "Resize,Async" )
                    img.SetOnLoad( _Cb(this,"img_OnLoad") )
                }
                //img.SetColor( "#222222" )
                img.SetMargins( xmarg, ymarg, xmarg, ymarg )
                img.SetOnTouchUp( _Cb(this,"img_OnTouchUp") )
                layRow.AddChild( img )
                
                //Store filenames in image object.
                img.fname = file;
                img.thumbFile = thumbFile;
            }
        }
    }
    
    //Called after async image has loaded.
    this.img_OnLoad = function( img )
    {
        //Save a thumb nail.
        img.Save( img.thumbFile )    
    }
    
    //Show image when touched.
    this.img_OnTouchUp = function( ev )
    {
        //Load full size image to top layout.
        layView.SetBackColor( "#ff000000" )
        this.imgView = app.CreateImage( ev.source.fname, 1.0, -1 )
        layView.AddChild( this.imgView )
    }
    
    //Check if image is being viewed.
    this.IsViewerOpen = function() 
    {
        return gal.imgView;
    }
    
    //Close current image being viewed.
    this.CloseViewer = function()
    {
        if( this.imgView ) 
        { 
            layView.DestroyChild( this.imgView )
            this.imgView = null;
            layView.SetBackColor( "#00000000" )
        }
    }
    
    //Load the images.
    this.Load()
}

