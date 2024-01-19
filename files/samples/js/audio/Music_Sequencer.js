
/*
 * Simple Music Sequencer by CandleLight
 */

//Declare global variables.
var items = []
var index = 0
var step, blockWidth = (1 / 7) - 0.002 // 7 columns
var synth, note

//Set available notes and colors.
var notes  = ["E5", "D4", "B4", "A#4", "A4", "G4", "E4"]
var colors = ["#A3EEFF", "#FFFDC2", "#C4FFD7"]


//Called when application is started.
function OnStart()
{
    //Configure app to landscape mode, full screen.
    app.SetOrientation("Landscape")
    app.SetScreenMode( "Game" )

	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    //Draw sequencer to main layout.
    Draw( lay )

	//Add layout to app.
	app.AddLayout( lay )
}

//Draw the sequencer.
function Draw( lay )
{
    lay.SetBackColor("#EEEEEE")
    var layHoriz, block

    for(var row=0; row<3; row++) { // 3 row
        item = []
        layHoriz = app.CreateLayout("Linear", "Horizontal,FillX")

        for(var col=0; col<notes.length; col++) { // 7 column
            block = AddBlock(layHoriz, colors[row])
            item.push(block)
        }
        items.push(item)

        // lay from main screen.
        lay.AddChild(layHoriz)
    }

    //Create the music component.
    music = app.CreateMusic()

    //Create a Synthesizer that can play 3 notes at once.
    synth = music.CreatePolySynth("Synth", {maxPolyhony: 3});

    //Create a transport in repeat mode.
    music.RepeatTransport( repeat, "4n" )
    music.StartTransport()
}

//Add a sequencer block to the screen.
function AddBlock(layHoriz, color)
{
    card = app.AddLayout(layHoriz, "Card")
    card.SetMargins(0.001, 0.001, 0.001, 0.002)
    card.SetCornerRadius(8)

    block = app.AddText(card, "", blockWidth, 0.33 - 0.002)
    block.SetOnTouchDown(block_OnTouchDown)
    block.GetChecked = function() { return this.data.checked }
    block.SetBackColor("#FFFFFF")
    block.data.checked = false
    block.data.color = color
    return block
}

//Handle touching a block
function block_OnTouchDown()
{
    this.data.checked = !this.data.checked
    if(this.data.checked)
        this.SetBackColor(this.data.color)
    else
        this.SetBackColor("#FFFFFF")
}

//Repeat the sequence
function repeat(time)
{
    step = index % 7
    for(var i=0; i<3; i++)
    {   // loop 3 row
        note  = notes[i]       // find note.
        block = items[i][step] // find block.

        block.Animate("Swing", null, 500)

        if(block.GetChecked())
            synth.PlayStopTone(note, "8n", time)
    }
    index++
}

