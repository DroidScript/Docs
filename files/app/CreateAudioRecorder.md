The AudioRecorder object can be used to listen for sound and record it to a file.
After creation you have to define the recording file with the **SetFile** Method:
<js>rec.SetFile( "/sdcard/demofile.wav" );</js>

After that you can **Start** the recording: <js>rec.Start();</js>

The recorded audio will then be written to the specified file.

Finally you can also **Stop** the recording: <js>rec.Stop();</js>
