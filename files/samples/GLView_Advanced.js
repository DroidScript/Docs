//Initialise variables.
var horizDroidCount = 8;
var frameCounter = 0;
var rotateDroids = true;
var pulseDroids = false;
var moveDroids = false;

//Called when application is started.
function OnStart()
{
    //Set full screen game mode.
    app.SetScreenMode( "Game" )
    
    //Create the main layout.
    lay = app.CreateLayout( "Linear", "FillXY" )

    //Create a GLView and add it to main layout.
    glview = app.CreateGLView( 1, 1, "Fast2d" )
    lay.AddChild( glview )

    //Add the main layout to app.
    app.AddLayout( lay )
    
    //Create a layout to contain the controls.
    layControls = app.CreateLayout( "Linear", "Horizontal, FillX, VCenter" )
    layControls.SetPadding(0.005, 0.005, 0.005, 0.005)
    layControls.SetBackColor("#EE444444")
    
    //Create a SeekBar used to change the number of droids.
    skb = app.CreateSeekBar( 0.4 )
    skb.SetOnTouch( skb_OnTouch )
    skb.SetRange( 20 )
    skb.SetValue( horizDroidCount )
    skb.SetMargins(0, 0, 0.05, 0)
    
    //Create a Toggle button to turn droid rotation on/off.
    btnRotate = app.CreateToggle( "Rotate" )
    btnRotate.SetOnTouch( btnRotate_OnTouch )
    btnRotate.SetChecked( rotateDroids )
    
    //Create a Toggle button to turn droid pulsing on/off.
    btnPulse = app.CreateToggle( "Pulse" )
    btnPulse.SetOnTouch( btnPulse_OnTouch )
    btnPulse.SetChecked( pulseDroids )
    
    //Create a Toggle button to turn droid movement on/off.
    btnMove = app.CreateToggle( "Move" )
    btnMove.SetOnTouch( btnMove_OnTouch )
    btnMove.SetChecked( moveDroids )
    
    //Add the controls to the layout.
    layControls.AddChild( skb )
    layControls.AddChild( btnRotate )
    layControls.AddChild( btnPulse )
    layControls.AddChild( btnMove )
    
    //Add the controls layout to the app.
    app.AddLayout( layControls )
    
    //Now the GLView has been added to the layout, 
    //we can get its size in pixels.
    glviewWidth = glview.GetAbsWidth()
    glviewHeight = glview.GetAbsHeight()
    
    //Work out how many droids we can fit on screen.
    droidWidth = 1.0 / horizDroidCount;
    droidHeight = (droidWidth * glviewWidth) / glviewHeight;
    vertDroidCount = Math.round(1.0 / droidHeight)
    
    //Create 2 droid images to draw in the GLView.
    //Call StartRendering once Hello.png has finished loading.
    imgDroidGreen = glview.CreateImage( "/Sys/Img/Icon.png" )
    imgDroidBlue = glview.CreateImage( "/Sys/Img/Hello.png", 
                                       StartRendering )
    
    app.SetDebugEnabled(false)
}

function StartRendering()
{
    //Render at 30 frames per second
    setInterval( DrawFrame, 1000/30 )
}

function DrawFrame()
{
    //Note: DrawFrameSimple and DrawFrameAdvanced illustrate the 2
    //different ways of using GLView to achieve the same result
    
    //DrawFrameSimple uses GLView.DrawImage
    DrawFrameSimple()
    
    //DrawFrameAdvanced uses the GLView context
    //DrawFrameAdvanced()
    
    //Render the graphics
    glview.Render()
    
    frameCounter++;
}

function DrawFrameSimple()
{
    //DrawFrameSimple uses the GLView.DrawImage 
    //function to draw the grid of droids.
    
    //Draw the grid of droids, alternative between green and blue
    for( var row = 0; row < vertDroidCount; row++ )
    {
        //Start each row with alternating green and blue droids
        var drawGreenDroid = (row%2 == 0)
        
        for( var col = 0; col < horizDroidCount; col++ )
        {
            var x = col*droidWidth;
            var y = row*droidHeight;         
            var angle = 0;
            var scaledDroidWidth = droidWidth;
            var scaledDroidHeight = droidHeight;
            var droidImg = imgDroidGreen;
            
            if(drawGreenDroid)
            {
                //Setup the position, rotation and scale of the Green droid
                droidImg = imgDroidGreen;
                
                if( rotateDroids )
                {
                    angle = (frameCounter*10)
                }
                
                if( moveDroids )
                {
                    //Offset maximum +-1/4 of the width & height of the GLView
                    x += Math.sin(frameCounter/10) * 0.25;
                    y += Math.sin(frameCounter/20) * 0.25;
                }
                
                if( pulseDroids )
                {
                    var scale = 0.5 + Math.abs(Math.sin(frameCounter/10))
                    scaledDroidWidth = droidWidth * scale;
                    scaledDroidHeight = droidHeight * scale;
                    
                    //Offset x and y so that the droid center remains at 
                    //the same position no matter how much is it scaled
                    x -= (scaledDroidWidth/2) - (droidWidth/2)
                    y -= (scaledDroidHeight/2) - (droidHeight/2)
                }
            }
            else //Blue Droid
            {
                //Setup the position, rotation and scale of the Blue droid
                droidImg = imgDroidBlue;
                
                if( rotateDroids )
                {
                    angle = -(frameCounter*10)
                }
                
                if( moveDroids )
                {
                    //Offset maximum +-1/4 of the width & height of the GLView
                    x += -Math.sin(frameCounter/10) * 0.25;
                    y += -Math.sin(frameCounter/20) * 0.25;
                }
                
                if( pulseDroids )
                {
                    scale = 1.5 - Math.abs(Math.sin(frameCounter/10))
                    scaledDroidWidth = droidWidth * scale;
                    scaledDroidHeight = droidHeight * scale;
                    
                    //Offset x and y so that the droid center remains at 
                    //the same position no matter how much is it scaled
                    x -= (scaledDroidWidth/2) - (droidWidth/2)
                    y -= (scaledDroidHeight/2) - (droidHeight/2)
                }
            }
            
            //Draw the droid
            glview.DrawImage( droidImg, x, y, 
                              scaledDroidWidth, scaledDroidHeight, 
                              angle )
            
            //Alternate between drawing the green and 
            //blue droids within each row
            drawGreenDroid = !drawGreenDroid;
        }
    }
}

function DrawFrameAdvanced()
{
    //DrawFrameAdvanced uses GLView context - this will allow us to perform 
    //more advanced drawing operations, very similar to HTML5 Canvas
    var context = glview.GetContext()
    
    //Save the current GLView transform so we can restore 
    //it later once we have finished drawing
    context.save()
    
    //When using the context we need to work in pixels
    var droidWidthPxls = droidWidth * glviewWidth;
    var droidHeightPxls = droidHeight * glviewHeight;

    //Draw the grid of droids, alternative between green and blue
    for( var row = 0; row < vertDroidCount; row++ )
    {
        //Start each row with alternating green and blue droids
        var drawGreenDroid = (row%2 == 0)
        
        for( var col = 0; col < horizDroidCount; col++ )
        {
            var x = col*droidWidthPxls;
            var y = row*droidHeightPxls;
            var droidImg = imgDroidGreen;
            
            //Reset the GLView transform to the 
            //Identity transform (no translation, rotation or scale)
            context.resetTransform()
            
            if( drawGreenDroid )
            {
                //Setup the GLView transform for the Green droid
                droidImg = imgDroidGreen;
                
                if( moveDroids )
                {
                    //Offset maximum +-1/4 of the width & height of the GLView
                    var tX = Math.sin(frameCounter/10) * (glviewWidth/4)
                    var tY = Math.sin(frameCounter/20) * (glviewHeight/4)
                    context.translate(tX, tY)
                }
                
                //Apply a translate transform to move the droid into it's
                //default grid position
                context.translate( (droidWidthPxls/2) + x, 
                                   (droidHeightPxls/2) + y )
                
                //Apply a rotate transform to rotate the droid around 
                //it's center
                if( rotateDroids )
                {
                    //When working with transforms, angles have to be 
                    //specified in radians - convert degrees to radians.
                    var angleInDegrees = frameCounter*10;
                    var angleInRadians = angleInDegrees * Math.PI/180;
    
                    context.rotate( angleInRadians, angleInRadians )
                }
                
                //Apply a scale transform to pulse each droid
                if( pulseDroids )
                {
                    var scale = 0.5 + Math.abs(Math.sin(frameCounter/10))
                    context.scale(scale, scale)
                }
            }
            else //Blue Droid
            {
                //Setup the GLView transform for the Blue droid
                droidImg = imgDroidBlue;
                
                if( moveDroids )
                {
                    //Offset maximum +-1/4 of the width & height of the GLView
                    var tX = -Math.sin(frameCounter/10) * (glviewWidth/4)
                    var tY = -Math.sin(frameCounter/20) * (glviewHeight/4)
                    context.translate(tX, tY)
                }
                
                //Apply a translate transform to move the droid into it's
                //default grid position
                context.translate( (droidWidthPxls/2) + x, 
                                   (droidHeightPxls/2) + y )
                
                //Apply a rotate transform to rotate the droid around 
                //it's center
                if( rotateDroids )
                {
                    //When working with transforms, angles have to be 
                    //specified in radians - convert degrees to radians.
                    var angleInDegrees = -frameCounter*10;
                    var angleInRadians = angleInDegrees * Math.PI/180;

                    context.rotate( angleInRadians, angleInRadians )
                }
                
                //Apply a scale transform to pulse each droid
                if( pulseDroids )
                {
                    var scale = 1.5 - Math.abs(Math.sin(frameCounter/10))
                    context.scale(scale, scale)
                }
            }
            
            //Now draw the droid, it will be transformed by 
            //the current GLView transform defined above.
            context.drawImage( droidImg, 0, 0, droidImg.width, droidImg.height, 
                               -droidWidthPxls/2, -droidHeightPxls/2, 
                               droidWidthPxls, droidHeightPxls )
            
            //Alternate between drawing the green and 
            //blue droids within each row
            drawGreenDroid = !drawGreenDroid;
        }
    }
    
    //Restore the previous GLView transform that we saved earlier. 
    //This means that any transforms we applied while drawing will 
    //now be discarded.
    context.restore()
}

function skb_OnTouch( value )
{
    //Change the number of droids on screen
    
    horizDroidCount = Math.round(value)
    if(horizDroidCount < 1)
    {
        horizDroidCount = 1;
    }

    droidWidth = 1.0 / horizDroidCount;
    droidHeight = (droidWidth * glviewWidth) / glviewHeight;
    vertDroidCount = Math.round(1.0 / droidHeight)
}

function btnRotate_OnTouch()
{
    rotateDroids = btnRotate.GetChecked()
}

function btnPulse_OnTouch()
{
    pulseDroids = btnPulse.GetChecked()
}

function btnMove_OnTouch()
{
    moveDroids = btnMove.GetChecked()
}
