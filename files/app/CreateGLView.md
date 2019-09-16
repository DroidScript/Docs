GLView is a fast 2D canvas suitable for drawing and moving graphics around on the screen quickly, ideal for games. The options parameter should be always set to “Fast2d”.
%c

Use the **CreateImage** method of the GLView object to create an image that can be used with the GLView.
You can specity a **callback** function too which will be called once the image is ready to use.

To draw the sprite on the canvas use the **DrawImage** method.
<red>Note: don't forget to specify all parameters, including angle. Otherwise the image will not be drawn.</red>
You can leave either width or height -1 to scale the other parameter according to the sprite aspect ratio.

Once all drawing has been done, the **Render** method must be called to render all the GLView graphics to the screen.
<sample DrawImage>

### Render Loop
To create a rendering loop for a game, use the setInterval JavaScript function to call your drawing function at regular intervals.
The example below draws a continuously rotating image by calling the DrawFrame function 30 times each second, updating the angle each time:
<sample Render Loop>

### Sprite Touch Detection
If you need to want to simulate OnTouch for a GLView Image, you will need to keep track of the position, width and height that it has been drawn with. Then use the GLView OnTouch event to determine if the touch coordinates are within the GLView Image yourself. To prevent touch detect on all sprites on the touch position define a drawing order according to a list.
<sample Sprite Touch>

### Sprite Animations
GLView supports the use of Sprite Sheets. The DrawSprite method can be used to draw part of an image to the GLView.
The following example uses a sprite sheet containing 8 stages of a character running. The DrawSprite method is used to draw each of the 8 sections in turn to give the effect of the character continuously running:
<sample Sprite Sheet Animation>
