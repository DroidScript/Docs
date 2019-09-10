Web servers form the foundation of the web, especially the Internet of Things (IoT). Turning your phone or tablet into a web server or creating a network of interconnected devices is very simple with DroidScript. Set a document root for the server using the SetFolder method of the WebServer object. This is the folder location on your device that your web pages will be served from.
<js>wbs.SetFolder( path );</js>

Start the server using the Start method.
<js> wbs.Start();</js>

And stop it using the Stop method.
<js>wbs.Stop();</js>

The following example shows how to create a basic webserver for serving pages over WiFi from your device. It will serve a built in demo page.

For simplicity some of the features in the demo page will not work in this first example. Try them and you will see how the server presents errors. The next example shows how to handle all the features of the demo page.
<sample Basic>

The second example shows how to accept file upload and permit directory listings by including permissions in the options parameter of the app.CreateWebServer method.

It also adds a servlet to respond to messsages from the web client. A servelet can be used to process data supplied by a user via form elements or it can handle requests made from the client application.

To get a better understanding of how client - server messaging works you can view the source of the served demo page and the network view in the developer tools of your favorite browser to see how the simple GET request is sent from the client browser to the servlet for processing by the OnServlet function when the Send Message button is clicked.
<sample Servlets>

Web sockets are faster than servlets and can be used for both client - server applications or peer-to-peer systems where each connected node is both a client and a server without a centralized server.

This makes web sockets very useful for datasharing in multiplayer games.

All requests sent to the same servlet will queue up behind each other and are processed in order. The server application is said to be blocking all other requests whilst a servlet completes each task synchronously.

Web sockets recieve the request and then start a process to handle the request. When the task is complete any data or messages to be returned will be sent back to the relevant connected clients. In this case the server application is said to be non-blocking or asynchronous.
See Also: @CreateWebSocket

Web sockets can be used for broadcast purposes, for example sending the same message to all connected clients. They can also be used to send different direct messages to a specific one device using the IP address.

The following example demonstrates web sockets being used to receive messages from and broadcasting messages to connected devices.
<sample Send and Receive messages>
