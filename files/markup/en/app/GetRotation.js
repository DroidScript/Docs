// ------------- HEADER SECTION -------------


/** # GetRotation #
 * @brief Get device rotation
 * Returns the current rotation of the device around it's Z-Axis in 90 degree steps. The values are relative to the initial orientation of the device on startup.
 * 
 * See Also: @GetOrientation
 * $$ app.GetRotation() $$ 
 * @returns num_deg-0|90|180|270
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Repeatedly Show Rotation
function OnStart()
{
    app.Animate( ShowRotation, 2 );
}

function ShowRotation()
{
    <b>var mode = app.GetRotation();</b>
    app.ShowPopup( mode );
}
 */
    
            
    
/**
@sample Show Rotation and switch Orientation
cfg.Portrait;

function OnStart()
{
    app.Animate( ShowRotation, 2 );
    setTimeout( 'app.SetOrientation("landscape")', 5000 );
}

function ShowRotation()
{
    <b>var mode = app.GetRotation();</b>
    app.ShowPopup( mode );
}
 */
    
            
    
/**
@sample Python Repeatedly Show Rotation
from native import app

def OnStart():
    app.Animate(ShowRotation, 2)

def ShowRotation(time, dtime):
    mode = app.GetRotation()
    app.ShowPopup(mode)
 */
    
            
    
/**
@sample Python Show Rotation and switch Orientation
# cfg.Portrait

from native import app

def OnStart():
    app.Animate(ShowRotation, 2)
    app.SetTimeout('app.SetOrientation("landscape")', 5000)

def ShowRotation(time, dtime):
    mode = app.GetRotation()
    app.ShowPopup(mode)
 */
    
            