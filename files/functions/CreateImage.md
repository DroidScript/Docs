Image controls can be used to display images such like png, jpg or gif.
Just pass the file path and your're done.
%c
Without the **width** and **height** dimensions the image will be shown without any scaling.
<sample Original Size>

If you specify one of them and leave the other _null_, _-1_ or blank, it will be scaled so that the aspect ratio is kept.
<sample Maintain Aspect>

And if you specify both parameters it will be scaled to your wishes.
<sample Stretched>

If you want images to depress like buttons if touched you can use the “Button” **option**.
<sample Button>


### Drawing on Images
Images are also useful for drawing basic shapes and other images on it and therefore for creating dynamic animations or even basic games. To create an empty image you can pass _null_ as file parameter.

This way you can also specify a fixed pixel size to the image you can use the “fix” **option** and pass values for the **pxw** and **pxh** parameters.
<js>
img = app.CreateImage( null, 0.8, 0.5, "fix", 20, 20 );
img.DrawLine( 0, 0, 1, 1 );
</js>

If you dislike the anti-alias effect you can apply the “alias” **option** on a higher resolution image and draw a low-resolution image on it:
<js>
img2 = app.CreateImage( null, .8, .5, "alias" );
img2.DrawImage( img, 0, 0, 1, 1, 0 );
</js>

There are a whole bunch of drawing methods defined here. Some of the were already used above. You can draw lines, rectangles, circles and other images, just to name a few. You can even draw a transformed image using an [transformation matrix](http://www.it.hiof.no/\~borres/j3d/math/twod/p-twod.html#ma2d35). Check out the **Draw\*** methods in the method list below to get more details about all drawing functions.
<sample Draw Shapes>

### Drawing on Images _fast_
If you have many draw operations to perform at runtime (ie. for games) you might want to disable the automatic canvas update after each Draw* call using the **SetAutoUpdate** method. To force the rendering now, you have to call **Update**.

Another way to increase the animation speed is using the _NoDom_ configuration. This will disable html and js Dom elements in your app that consume a lot of resources, but app functions can still be used.
For animations you can then use the **Animate** function of the app object which calls a function for a given amount per second. Note that the canvas still needs some time to refresh - so going over 60 fps makes no sense at all.
<sample Advanced Clock Animating>
