// ------------- HEADER SECTION ------------- 


/** # ToFront #
 * @brief Bring your app to the foreground
 * Brings the app back to the foreground.
 * 
 * See Also: @ToBack.
 * $$ app.ToFront() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Hide and Peek
function OnStart()
{
    app.ToBack();
    setTimeout("app.ToFront()", 5000);
}

function OnPause()
{
    app.ShowPopup( "OnPause" );
}

function OnResume()
{
    app.ShowPopup( "OnResume" );
}
 */
    
            