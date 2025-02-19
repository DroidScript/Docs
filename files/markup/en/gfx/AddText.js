// ------------- HEADER SECTION -------------


/** # AddText #
 * @brief Adds a text object
 * Adds a [text](CreateText.htm) object to the game.
 * $$ gfx.AddText(obj, x, y, angle, alpha) $$
 * @param {gvo} obj CreateText
 * @param {num_frc} x
 * @param {num_frc} y
 * @param {num_frc} angle
 * @param {num_frc} alpha
*/




// ------------- SAMPLES -------------



/**
@sample
cfg.Game;

function OnLoad()
{
    text = gfx.CreateText( "Hello World", 40, "/Sys/Img/Desyrel.xml" );
}

function OnReady()
{
    <b>gfx.AddText( text, 0.2, 0.4, 0.2 );</b>
    gfx.Play();
}
 */



/**
@sample Python
# cfg.Game

def OnLoad():
    global text
    text = gfx.CreateText("Hello World", 40, "/Sys/Img/Desyrel.xml")

def OnReady():
    gfx.AddText(text, 0.2, 0.4, 0.2)
    gfx.Play()
 */
