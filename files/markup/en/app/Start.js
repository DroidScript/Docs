// ------------- HEADER SECTION -------------


/** # Start #
 * @brief Start your DS app in an html project
 * Starts your DS app in an html project. Call it in the document.onload function in order to initialize DroidScript and execute your OnStart() function.
 * $$ app.Start() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Html App
<html>
<head>
    <meta name="viewport" content="width=device-width">
    <script src='file:///android_asset/app.js'></script>
</head>

<script>
    function OnStart()
    {
        app.ShowPopup( "HTML Rocks!" );
    }
</script>

<body onload="app.Start()" style="background-color: #ffffff;">
</body>
</html>
 */
    
            
    
/**
@sample Python Html App
from native import app

<html>
<head>
    <meta name="viewport" content="width=device-width">
    <script src='file:///android_asset/app.js'>
</head>

    def OnStart():
        app.ShowPopup( "HTML Rocks!" );

<body onload="app.Start()" style="background-color: #ffffff;">
</body>
</html>
 */
    
            