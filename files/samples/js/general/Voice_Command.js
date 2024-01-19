//Note: Offline recognition engines can be downloaded in the
//Android Language and Input settings (recommended for speed).
//Higher quality voices may also be downloaded.

//Called when application is started.
function OnStart()
{
    //Create a main layout with objects vertically centered.
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )   
    lay.SetBackground( "/res/drawable/pattern_carbon", "repeat" )

    var s = "<u>Commands</u><br><br>"
        + "\"Computer?\"<br>"
        + "\"What time is it?\"<br>"
        + "\"What day is it?\"<br>"
        + "\"How are you?\"<br>"
        + "\"Exit\"<br>";
    txt = app.CreateText( s, 0.9, 0.8, "Multiline,Html" )
    txt.SetTextSize( 32 )
    lay.AddChild( txt )
  
    //Add layout to app.    
    app.AddLayout( lay )
    
    //Create recognition object and set callbacks.
	speech = app.CreateSpeechRec("NoBeep,Parxtial")
	speech.SetOnResult( speech_OnResult )
	speech.SetOnError( speech_OnError )
	
	//Say something at start (to get speech engine ready).
    app.TextToSpeech( "Your wish is my command", 1, 1.5, Listen )
    app.ShowProgress()
}

//Start recognizing.
function Listen()
{
    app.HideProgress()
	speech.Recognize()
}

//Called with the recognition result(s).
function speech_OnResult( results, partial )
{
    //Get result.
    var cmd = results[0].toLowerCase()
    
    //Watch for key phrases.
    if( cmd.indexOf("computer") > -1 )
    {
        //speech.Cancel()
        app.TextToSpeech( "Yes Master?", 1,2, Listen )
    }
    else if( cmd.indexOf("what")>-1 && cmd.indexOf("time")>-1 )
    {
        //speech.Cancel()
        app.TextToSpeech( GetTime(), 1,2, Listen  )
    }
    else if( cmd.indexOf("what")>-1 && cmd.indexOf("day")>-1 )
    {
       // speech.Cancel()
        app.TextToSpeech( GetDay(), 1,2, Listen )
    }
    else if( cmd.indexOf("how")>-1 && cmd.indexOf("you")>-1 )
    {
        //speech.Cancel()
        app.TextToSpeech( "I'm feeling good", 1,2, Listen )
    }
    else if( cmd.indexOf("exit")>-1 )
    {
       app.Exit()
    }
    
    //Restart recognition.
    else speech.Recognize()
}


//Called if recognition fails.
function speech_OnError( error )
{
    console.log( "Error" + error )
    
    //Restart recognition.
    if( !speech.IsListening() ) speech.Recognize()
}

//Get the current time.
function GetTime()
{
    var d = new Date()
    return d.getHours() + " " + d.getMinutes()
}

//Get the current day.
function GetDay()
{
    var d = new Date()
    var weekday = new Array(7)
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[d.getDay()];
}

