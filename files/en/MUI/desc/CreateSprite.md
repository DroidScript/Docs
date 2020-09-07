Creates a sprite object based on an image file containing a sprite or a spritesheet.

To create a new Sprite just pass the image name as first parameter:

<js>gfx.CreateSprite( "/Sys/Img/Bunny.png", "bunnies" );</js>

**Spritesheets** can be loaded in two ways:

The simple one is a specific file pattern
“Img/Sheetname\_**width:'num'**x**height:'num'**x**spritesx:'num'**x**spritesy:'num'**” or
“Img/Sheetname\_strip**total:'num'**\_**width:'num'**x**height:'num'**x**spritesx:'num'**x**spritesy:'num'**”
if you have a different amount of sprites than the rectangle of _spritesx * spritesy_ sprites.

Example from the downloadable demo [Grannies and Zombies](https://droidscript.org):
<js>
granny = gfx.CreateSprite( "Img/Granny\_1600x1000x8x5", "granny" );
zombie = gfx.CreateSprite( "Img/Zombie\_strip35\_1400x1000x7x5", "zombie" );
</js>

The second way is to create a SpriteSheet using the
