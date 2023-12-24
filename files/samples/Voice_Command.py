#Translated Python code :

#Note: Offline recognition engines can be downloaded in the
#Android Language and Input settings (recommended for speed).
#Higher quality voices may also be downloaded.

#Called when application is started.
def OnStart():
    #Create a main layout with objects vertically centered.
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )   
    lay.SetBackground( "/res/drawable/pattern_carbon", "repeat" )

    s = "<u>Commands</u><br><br>"  ㅣ
        + "\"Computer?\"<br>"
        + "\"What time is it?\"<br>"
        + "\"What day is it?\"<br>"
        + "\"How are you?\"<br>"
        + "\"Exit\"<br>"
    txt = app.CreateText(s, 0.9, 0.8, "Multiline,Html")
    txt.SetTextSize(32)
    lay.AddChild(txt)

    #Add layout to app.    
    app.AddLayout(lay)
    
    #Create recognition object and set callbacks.
    speech = app.CreateSpeechRec("NoBeep,Parxtial")
    speech.SetOnResult(speech_OnResult)
    speech.SetOnError(speech_OnError)
    
    #Say something at start (to get speech engine ready).
    app.TextToSpeech("Your wish is my command", 1, 1.5, Listen)
    app.ShowProgress()

#Start recognizing.
def Listen():
    app.HideProgress()
    speech.Recognize()

#Called with the recognition result(s).
def speech_OnResult(results, partial):
    #Get result.
    cmd = results[0].lower()
    
    #Watch for key phrases.
    if "computer" in cmd:
        #speech.Cancel()
        app.TextToSpeech("Yes Master?", 1,2, Listen)
    elif "what" in cmd and "time" in cmd:
        #speech.Cancel()
        app.TextToSpeech(GetTime(), 1,2, Listen)
    elif "what" in cmd and "day" in cmd:
        #speech.Cancel()
        app.TextToSpeech(GetDay(), 1,2, Listen)
    elif "how" in cmd and "you" in cmd:
        #speech.Cancel()
        app.TextToSpeech("I'm feeling good", 1,2, Listen)
    elif "exit" in cmd:
        app.Exit()
    
    #Restart recognition.
    else: speech.Recognize()

#Called if recognition fails.
def speech_OnError(error):
    print("Error" + error)
    
    #Restart recognition.
    if not speech.IsListening(): 
        speech.Recognize()

#Get the current time.
def GetTime():
    d = datetime.datetime.now()
    return str(d.hour) + " " + str(d.minute)

#Get the current day.
def GetDay():
    d = datetime.datetime.now()
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekday[d.weekday()]