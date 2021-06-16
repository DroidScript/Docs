Creates a sprite object based on an image file containing a sprite or a spritesheet.

To create a new Sprite just pass the image name as first parameter:

<js>gfx.CreateSprite( "/Sys/Img/Bunny.png", "bunnies" );</js>

**Spritesheets** can be loaded in two ways:

The simple one is a specific file pattern
“Img/Sheetname\_**WIDTH:'num'**x**HEIGHT:'num'**x**SPRITE\_SX:'num'**x**SPRITE\_SY:'num'**” or
“Img/Sheetname\_strip**TOTAL:'num'**\_**WIDTH:'num'**x**HEIGHT:'num'**x**SPRITE\_SX:'num'**x**SPRITE\_SY:'num'**”
if you have a different amount of sprites than the rectangle of _spritesx * spritesy_ sprites.

Example from the downloadable demo [Grannies and Zombies](https://ds.justplayer.de/uploads/grannies-and-zombies):
<js>
granny = gfx.CreateSprite( "Img/Granny\_1600x1000x8x5", "granny" );
zombie = gfx.CreateSprite( "Img/Zombie\_strip35\_1400x1000x7x5", "zombie" );
</js>

The second way is to create a SpriteSheet using the @CreateSpriteSheet method which might come handy if a single sprite has multiple animations or if a sprite is reused but using a different sprite sheet.
