// ------------- HEADER SECTION -------------


/** # ShowPopup #
 * @brief Show a popup message
 * Shows a simple popup message on the screen. It automatically disappears after about 5 secods or after an even shorter time if you pass the “Short” **option**, or when the user touches the screen.
 * $$ app.ShowPopup(message, options?) $$ 
 * @param {str} message 
 * @param {str_com} [options] Bottom,Short|Long
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Top
function OnStart()
{
	<b>app.ShowPopup( "Hello World!" );</b>
}
 */
    
            
    
/**
@sample Bottom
function OnStart()
{
	<b>app.ShowPopup( "Hello World!", "Bottom,Short" );</b>
}
 */
    
            
    
/**
@sample Python Top
from native import app

def OnStart():
    app.ShowPopup("Hello World!")
 */
    
            
    
/**
@sample Python Bottom
from native import app

def OnStart():
    app.ShowPopup("Hello World!", "Bottom,Short")
 */
    
            