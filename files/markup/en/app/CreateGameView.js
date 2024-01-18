// ------------- HEADER SECTION -------------


/** # CreateGameView #
 * @abbrev gmv
 *
 * $$ gmv = app.CreateGameView(width, height, options?) $$
 * @param {num_frc} width
 * @param {num_frc} height
 * @param {str_com} [options]
 * @returns dso-GameView
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
The GameView is a blindingly fast container for game development with a physics engine and PIXI as underlying sprite container which uses the GPU to render graphics. The GameView runs a standalone script which can communicate with the main app via gfx.Execute or gmv.Execute vice versa.

Starting from DS 2.05 the GameView supports the same options as @CreateGame.

You can find references of GameView scripting here:
    - official [DS GameView tutorials](https://dsgameview.wixsite.com/gameview) (Start with [lesson 1](https://dsgameview.wixsite.com/gameview/copy-of-lesson-1-anatomy-of-the-gam); [Sample SPK](https://ds.justplayer.de/uploads/41))


### GameView in web browsers
If you prefer to work on a PC you can even run and debug your GameView code in a regular web-browser. Check out these demos to see how it works: [](http://androidscript.org/beta/GameViewWeb)
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern AdjustColor */

/** @extern Batch */

/** @extern ClearFocus */

/** ### Execute ###
 * @brief Execute code inside the GameView
 * Execute some code inside the GameView.
 * $$ gmv.Execute(js) $$
 * @param {str_jsc} js
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ gmv.GetType() $$
 * @returns str-GameView
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetFile ###
 * @brief Define the game source file
 * Loads a GameView script file.
 * $$ gmv.SetFile(file) $$
 * @param {str_ptf} file
 */


/** ### SetFrameRate ###
 * @brief Change the target framerate
 * Change the targeted framerate.
 * $$ gmv.SetFrameRate(fps) $$
 * @param {num_fps} fps
 */


/** @extern SetMargins */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Script
cfg.Landscape;

function OnStart()
{
    app.PreventScreenLock( true );

    app.CopyFile("/assets/samples/Game_Bounce.js", "script.js");

    lay = app.CreateLayout( "Linear", "Vertical,FillXY,VCenter" );

    <b>gam = app.CreateGameView( 1, 1 );
    gam.SetFile( "script.js" );
    gam.SetFrameRate( 40 );
    lay.AddChild( gam );</b>

    app.AddLayout( lay );
}
 */



/**
@sample Python Script
# cfg.Landscape

from native import app

def OnStart():
    app.PreventScreenLock(True)

    app.CopyFile("/assets/samples/Game_Bounce.js", "script.js")

    lay = app.CreateLayout("Linear", "Vertical,FillXY,VCenter")

    <b>gam = app.CreateGameView(1, 1)
    gam.SetFile("script.js")
    gam.SetFrameRate(40)
    lay.AddChild(gam)</b>

    app.AddLayout(lay)
 */
