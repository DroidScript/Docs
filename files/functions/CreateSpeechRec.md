The **SpeechRec** object can be used to listen for and recognize speech.
Use the **Recognize** method of the SpeechRec object to tell it to start listening:
<js>speech.Recognize();</js>

When the SpeechRec object has started listening, the **OnReady** callback function will be called. Use the **SetOnReady** method to set the name of your OnReady callback function.

If the SpeechRec object recognizes speech, the **OnResult** callback function will be called. The results are passed to the OnResult callback function as an array, with the most probable result at the front. Use the **SetOnResult** method to set the name of your OnResult callback function.

If the SpeechRec object does not recognize anything, the **OnError** callback function will be called. Use the **SetOnError** method to set the name of your OnError callback function.
