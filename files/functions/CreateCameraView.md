**CameraView**s are used to access the device camera.
You can use the “Front” option to show the front camera instead of the default back camera.

The camera needs some time to initialize first.
You can define a callback function via **SetOnReady** which is called if the camera can be used.
There you have to to call the **StartPreview** function of the CameraView control to start the preview.
<sample Show Camera Preview>

The basic functionality of the camera control is taking pictures or recording video.
<sample Take pictures>
<sample Record Video>

But it provides advanced image processing functions as well. These are color reporting, motion detection and face recognision.
<sample Motion Detector>

More samples can be found in the samples section of DroidScript.
