The MediaPlayer object can be used to play sound files from the phone or tablet.
Use the SetFile method of the MediaPlayer object to set the sound file to play. Supported sound file types include .ogg and .mp3.

When the sound file is ready for playback, the **OnReady** callback function will be called. Then you can start playing using the **Start** method.
If the sundtrack has finished playing, the **OnComplete** callback fill be called. All together you code could look like that:
<sample Playing Audio>

The SeekTo method can be used to adjust the playback position by passing in the time in seconds. Passing in 0 will set the playback position to the beginning of the sound file.
<js>player.SeekTo( 0 );</js>
