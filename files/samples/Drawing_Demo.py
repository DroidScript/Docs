from native import app

# Called when application is started.
def OnStart():
    global canvas
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Add a canvas to the layout.
    canvas = app.AddCanvas(lay, 0.9, 0.9)

    # Add layout to app.
    app.AddLayout(lay)

    # Draw our picture.
    DrawPicture()

def DrawPicture():
    # Fill image with solid white.
    canvas.SetColor("white")

    # Set drawing color to blue
    canvas.SetPaintColor("blue")

    # Draw a tiny point (single pixel) in
    # the center of the image.
    canvas.DrawPoint(0.5, 0.5)

    # Draw diagonal blue line.
    canvas.SetLineWidth(2.5)
    canvas.SetPaintColor("blue")
    canvas.DrawLine(0.6, 0.2, 0.7, 0.95)

    # Draw purple circle with radius 0.1 of image width.
    # Color format is (#alpha:red:green:blue) in hex.
    canvas.SetPaintColor("#ff992299")
    canvas.DrawCircle(0.2, 0.2, 0.1)

    # Draw some red text.
    canvas.SetTextSize(24)
    canvas.SetPaintColor("red")
    canvas.DrawText("Hello World", 0.1, 0.8)

    # Draw translucent rectangle.
    canvas.SetPaintColor("#22444444")
    canvas.DrawRectangle(0.22, 0.7, 0.9, 0.88)

    # Draw un-filled circle.
    canvas.SetPaintStyle("Line")
    canvas.SetPaintColor("#ff00aa00")
    canvas.DrawCircle(0.3, 0.5, 0.05)

    # Update the canvas.
    canvas.Update()