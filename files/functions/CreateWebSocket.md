WebSocket are useful when constantly comminicating with a server and when a fast reaction time is required.
A web socket will automatically open after creating it. Once after finished loading, the **OnOpen** callback is called.

In order to receive messages from the server you have to specify a **OnMessage** callback.

See Also: @CreateWebServer