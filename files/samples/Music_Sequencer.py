from native import app

# Simple Music Sequencer by CandleLight
global items, notes, colors, blockWidth, index, synth

# Declare
items = []
index = 0
step, blockWidth = (1 / 7) - 0.002  # 7 columns
synth = None
note = None

# Set available notes and colors.
notes = ["E5", "D4", "B4", "A#4", "A4", "G4", "E4"]
colors = ["#A3EEFF", "#FFFDC2", "#C4FFD7"]

# Called when application is started.
def OnStart():
    global lay
    # Configure app to landscape mode, full screen.
    app.SetOrientation("Landscape")
    app.SetScreenMode("Game")

    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    # Draw sequencer to main layout.
    Draw(lay)

    # Add layout to app.
    app.AddLayout(lay)

# Draw the sequencer.
def Draw(lay):
    global layHoriz, synth
    lay.SetBackColor("#EEEEEE")
    layHoriz = None
    block = None

    for row in range(3):  # 3 row
        item = []
        layHoriz = app.CreateLayout("Linear", "Horizontal,FillX")

        for col in range(len(notes)):  # 7 column
            block = AddBlock(layHoriz, colors[row])
            item.append(block)
        items.append(item)

        # lay from main screen.
        lay.AddChild(layHoriz)

    # Create the music component.
    music = app.CreateMusic()

    # Create a Synthesizer that can play 3 notes at once.
    synth = music.CreatePolySynth("Synth", maxPolyhony=3)

    # Create a transport in repeat mode.
    music.RepeatTransport(repeat, "4n")
    music.StartTransport()

# Add a sequencer block to the screen.
def AddBlock(layHoriz, color):
    global color, GetChecked
    card = app.AddLayout(layHoriz, "Card")
    card.SetMargins(0.001, 0.001, 0.001, 0.002)
    card.SetCornerRadius(8)

    block = app.AddText(card, "", blockWidth, 0.33 - 0.002)
    block.SetOnTouchDown(block_OnTouchDown)
    block.GetChecked = lambda: block.data.checked
    block.SetBackColor("#FFFFFF")
    block.data.checked = False
    block.data.color = color
    return block

# Handle touching a block
def block_OnTouchDown():
    data.checked = not data.checked
    if data.checked:
        SetBackColor(data.color)
    else:
        SetBackColor("#FFFFFF")

# Repeat the sequence
def repeat(time):
    step = index % 7
    for i in range(3):  # loop 3 row
        note = notes[i]  # find note.
        block = items[i][step]  # find block.

        block.Animate("Swing", None, 500)

        if block.GetChecked():
            synth.PlayStopTone(note, "8n", time)
    index += 1