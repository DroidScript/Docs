## Overview

<div style='overflow-x: scroll'>
<table>
    <thead>
        <tr>
            <th>Feature <kbd>\</kbd>   App Type</th>
            <th>HTML</th>
            <th>Native</th>
            <th>Node Native</th>
            <th>Hybrid</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>"Native Methods":"app.\* Methods"</th>
            <td><i class='fa fa-check green'></i> "<i class='fa fa-info-circle'></i>":"Included via <xml nobox><​script src=\"ds:/Sys/app.js\"></xml>"</td>
            <td><i class='fa fa-check green'></i></td>
            <td><i class='fa fa-check green'></i></td>
            <td><i class='fa fa-check green'></i> "<i class='fa fa-info-circle'></i>":"Not Cross-Platform"</td>
        </tr>
        <tr>
            <th>"Native UI":"Android UI from app.Create\* and app.Show\* methods"</th>
            <td><i class='fa fa-remove red'></i></td>
            <td><i class='fa fa-check green'></i></td>
            <td><i class='fa fa-check green'></i></td>
            <td><i class='fa fa-remove red'></i></td>
        </tr>
        <tr>
            <th>HTML / CSS UI</th>
            <td><i class='fa fa-check green'></i></td>
            <td class='tint-green'>via [WebView](../app/CreateWebView.htm) Component</td>
            <td class='tint-green'>via [WebView](../app/CreateWebView.htm) Component</td>
            <td><i class='fa fa-check green'></i></td>
        </tr>
        <tr>
            <th class='premHint'>MUI "<i class='fa fa-info-circle'></i>":"<premium>" Components</th>
            <td><i class='fa fa-check green'></i> "<i class='fa fa-info-circle'></i>":"Included via <xml nobox><​script src=\"ds:/Sys/mui.js\"></xml>"</td>
            <td><i class='fa fa-check green'></i> "<i class='fa fa-info-circle'></i>":"Included via <a href='04CodingFeatures.htm#MUI' onclick='location.href=this.href'>cfg.MUI</a>"</td>
            <td><i class='fa fa-check green'></i> "<i class='fa fa-info-circle'></i>":"Included via <a href='04CodingFeatures.htm#MUI' onclick='location.href=this.href'>cfg.MUI</a>"</td>
            <td><i class='fa fa-remove red'></i></td>
        </tr>
        <tr>
            <th>Node.js</th>
            <td class='tint-green'>via [NodeJS](../app/CreateNode.htm) Component</td>
            <td class='tint-green'>via [NodeJS](../app/CreateNode.htm) Component</td>
            <td><i class='fa fa-check green'></i></td>
            <td class='tint-green'>via [NodeJS](../app/CreateNode.htm) Component</td>
        </tr>
        <tr>
            <th>Cross "<i class='fa fa-info-circle'></i>":"Cannot use Native Methods, Native UI, MUI and Node.js" Platform</th>
            <td><i class='fa fa-check green'></i></td>
            <td><i class='fa fa-remove red'></i></td>
            <td><i class='fa fa-remove red'></i></td>
            <td><i class='fa fa-check green'></i></td>
        </tr>
        <tr>
            <th>Environment</th>
            <td class='tint-green'>Android WebView</td>
            <td class='tint-green'>Android WebView</td>
            <td class='tint-green'>NodeJS</td>
            <td class='tint-green'>Android WebView</td>
        </tr>
        <tr>
            <th>Minimum APK Size</th>
            <td class='tint-green'>low (4MB)</td>
            <td class='tint-green'>low (4MB)</td>
            <td class='tint-yellow'>high (30MB)</td>
            <td class='tint-green'>moderate (10MB)</td>
        </tr>
    </tbody>
</table>
</div>

## Html

An **'HTML' app** is simply a foreground Android Webview showing a standard HTML/CSS/JS (web style) user interface. It can make app.\* native Android calls via the JavaScript→Native bridge.

__Advantages:__
- standard web technologies and libraries to create UI.
→ well documented in the web (W3Schools)
- Small APK size and memory usage

__Disadvantages:__
- More time consuming to develop, HTML/CSS experience required
- No native 'look and feel' of Android


## Native

A **'Native' app** uses an invisible Android Webview to run the main JavaScript code, but the app's user interface is created with native Android controls via calls across the JS→Native bridge.

__Advantages:__
- Simple to use
- Direct access to browser features as Android WebView evolves (i.E. WebBluetooth, Canvas, WebAssembly, WebRTC)
- Small APK size and memory usage

__Disadvantages:__
- The performance is slower for complex UI (can be improved with [cfg.Fast](04CodingFeatures.htm#Fast) at the loss of DOM objects)
- Modern browser features might not work on older phones


## Node Native

A **'Node Native' app** runs the main JavaScript code inside a standard NodeJS instance instead of the WebView. User interface is made using native Android controls which are accessed using app.\* methods. These native calls run via a custom NodeJS extension instead of the Js→Native bridge.

__Advantages:__
- Native UI + powerful server/IOT functionality all in one
- Access to many thousands of free 'npm' modules for extending app functionality
- Higher performance when creating complex native user interfaces

__Disadvantage:__
- Large APK size, more memory usage


## Hybrid

A **'Hybrid' app** runs the main JavaScript code inside a foreground Android WebView,  the users creates the UI programatically like with 'Native' apps, but it's rendered inside the same WebView using HTML/CSS instead of using native Android controls across the bridge.

__Advantages:__
- Simple and fast to use
- WYSIWYG editor available
- Industry standard 'Material' look and feel
- Low memory usage, Smaller APK
- Cross-Platform compatible, since it is just HTML/CSS in the background
- No JS→Native bridge required for rendering UI (build complex UI faster)
- Switch between light and dark theme at runtime

__Disadvantages:__
- Fewer customization options for look and feel
- app.* and NodeJS features break cross-platform compatibility
