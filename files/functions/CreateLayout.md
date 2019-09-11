Layouts are container objects which are used to visually organize graphical objects (controls), such as text, buttons and images on the screen. There are 3 types of layout: _**“Linear”**_, _**“Absolute”**_ and _**“Frame”**_.

Layouts are transparent by default but you can set a background image which can be tiled or stretched to fill the layout. You can also set a background color or background gradient.

You can add child objects to the Layout using the AddChild function: <js>lay.AddChild( object );</js>
The alignment of chlld objects within a layout can be set by adding the **options** “Left”, “Right”, “Bottom” and “VCenter”, by default objects will be aligned “Top,Center”.

### Linear Layouts
Linear layouts are probably the most useful type and are used to organize controls in either the default “Vertical” or “Horizontal” direction on screen.
<sample Vertical>
<sample Horizontal>

By default Layouts will auto-size to wrap their contents but you have 3 more options as to how a layout sizes within it's parent: “FillX”, “FillY” and “FillXY”.
<sample Combined>

### Frame Layouts
Frame layouts are used to display objects in front or behind each other. Every time the **AddChild** function is called on a Frame layout, the child object is placed in a new layer in front of the previously added object at the top left of the frame.

Frame Layouts are useful if you wish to do **animated Flips** or **Slides** to reveal layers of objects or use **transparency**.
<sample Image Swap>

### Absolute Layouts
Absolute layouts ignore all alignment options and allow the absolute positioning of controls by calling the **SetPosition** and **SetSize** functions of each of the child objects. However, you are encouraged use linear layouts for most of your programs, unless it is _absolute_ly necessary.
