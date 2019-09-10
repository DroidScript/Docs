The **VideoView** can be used to play local video files from the filesystem or video streams from remote sources.
Use **SetFile** to set the video file or video stream address.
<js>player.SetFile( "https://file-examples.com/wp-content/uploads/2017/04/file\_example\_MP4\_640\_3MG.mp4" );</js>
When the video is ready to play, the **OnReady** callback function will be called, you can then use **Play** to start playing the video.

If the video cannot be played, the OnError callback function will be called. Use **SetOnReady** and **SetOnError** to set the names of your **OnReady** and OnError callback functions.