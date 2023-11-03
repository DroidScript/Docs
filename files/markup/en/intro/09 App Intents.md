## General

Intents are a way of communicating between apps, to initiate a specific task or to navigate the user to a different app for various reasons. The used app methods are @../app/SendIntent and @../app/OpenUrl.

This section is a collection of various examples that illustrate various use cases of intents and related methods.

## Default Apps

<sample Default Apps>
var categories = [
    "android.intent.category.APP_BROWSER",    // browser
    "android.intent.category.APP_MUSIC",      // music
    "android.intent.category.APP_CALCULATOR", // calculator
    "android.intent.category.APP_CONTACTS",   // contacts
    "android.intent.category.APP_EMAIL",      // email
    "android.intent.category.APP_MAPS",       // maps
    "android.intent.category.APP_GALLERY",    // gallery
    "android.intent.category.APP_CALENDAR",   // calendar
    "android.intent.category.APP_MARKET",     // market
    "android.intent.category.APP_MESSAGING",  // messaging
];
app.SendIntent(null, null, "android.intent.action.MAIN", categories[0]);
</sample>


## URI Intents

**Playstore App Page**
<js>
var packageName = "com.skype.raider";
app.OpenUrl("market&colon;details?id=" + packageName); 
</js>

**Skype: **[URI documentation](https://msdn.microsoft.com/library/office/dn745878)
<js>app.OpenUrl("skype&colon;echo123?call");</js>


## Standard Apps

#### GMail

<sample Create Email in GMail App>
var packageName = "com.google.android.gm";
var className = "com.google.android.gm.ComposeActivityGmail";
var action = "android.intent.action.VIEW";
var category = null;
var uri = "myfriend@gmail.com";
var type = "message/rfc822";

var extras = JSON.stringify([
    { name: "android.intent.extra.EMAIL", type: "list", value: "fred@gmail.com" },
    { name: "android.intent.extra.SUBJECT", type: "string", value: "My subject" },
    { name: "android.intent.extra.TEXT", type: "string", value: "Hello!" }
]);

app.SendIntent(packageName, className, action, category, uri, type, extras);
</sample>

#### Google Maps

[Google Maps intent documentation](https://developers.google.com/maps/documentation/android-api/intents)
<sample Basic Maps>
function OnStart()
{
    var lat = "51.5117";
    var lng = "-0.1275";
    simpleMap(lat, lng);
}

function simpleMap(latitude, longitude)
{
    var packageName = "com.google.android.apps.maps";
    var className = null;
    var action = "android.intent.action.VIEW";
    var uri = "geo:" + latitude + "," + longitude;
    app.SendIntent(packageName, className, action, null, uri);
}
</sample>
<sample Maps Turn by Turn Navigation>
function navigateTo(latitude, longitude)
{
    var packageName = "com.google.android.apps.maps";
    var className = null;
    var action = "android.intent.action.VIEW";
    var uri = "google.navigation:q=" + latitude + "," + longitude;
    if (app.IsAppInstalled(packageName))
        app.SendIntent(packageName, className, action, null, uri);
    else
        app.Alert("maps app not installed");
}
</sample>
<sample Maps Location>
app.SendIntent(
  "com.google.android.apps.maps",
  null,
  "android.intent.action.VIEW",
  "android.intent.category.DEFAULT",
  "geo:0,0?q=34.5678,123.4567 (Placename)"   // uri argument
);
</sample>

#### Phone Calls

**Note:** package and activity are not required because the dialer app differs among manufacturers and sometimes event among models from same manufacturer.

<sample Phone Call>
/* Some devices may display the Dialer app for both `DIAL` and `CALL`.
 *   `CALL` requires `PHONE` permission and `DIAL` does not
 *   `DIAL` does not allow emergency calls
 *   `DIAL` suppresses some special characters such as # to prevent abuse
 */

// Launch Dialer app
app.SendIntent(null, null, "android.intent.action.DIAL", null, "tel&colon;5551237654");

// Direct Call
app.SendIntent(null, null, "android.intent.action.CALL", null, "tel&colon;5551237654");
</sample>

#### SMS

<sample Basic SMS>
var number = "0123456789";
var message = "my message";

app.SendIntent(null, null, "android.intent.action.SENDTO",
    null, 'smsto:' + number, null, 
    JSON.stringify([{
        name: "sms_body",
        type: "string",
        value: message
    }]));
</sample>

#### Camera

<sample Camera Modes>
// Launch a camera in still image mode.
app.SendIntent(null, null, "android.media.action.STILL_IMAGE_CAMERA");

// Launch secure photo mode without attaching personal info
// previous snaps/videos, gallery, etc. link won't work
// used when device is secured (pin, password, etc), recommended use in locker apps.
app.SendIntent(null, null, "android.media.action.STILL_IMAGE_CAMERA_SECURE");

// Launch a camera in video recording mode.
app.SendIntent(null, null, "android.media.action.VIDEO_CAMERA");
</sample>

## Settings

The [Settings Intent Documentation](https://developer.android.com/reference/android/provider/Settings) has a `Constants` section with available Actions. Replace `ACTION_` by `android.settings.` to get the category parameter.
<sample Settings>
// Bluetooth
app.SendIntent(null, null, "android.settings.BLUETOOTH_SETTINGS" )
// WiFi
app.SendIntent(null, null, "android.settings.WIFI_SETTINGS" )
</sample>

## Misc

<sample Add Calendar Event>
function cal_si_insert()
{
    var today = Date.now();

    var extras = [
        { name: "description", type: "string", value: "DS SendIntent Description" },
        { name: "title", type: "string", value: "DS SendIntent Title" },
        { name: "beginTime", type: "long", value: today },
        { name: "eventLocation", type: "string", value: "DS SendIntent Address" },
        { name: "endTime", type: "long", value: today + 3600000 },
    ];
    extras = JSON.stringify(extras);

    app.SendIntent(null, null, "android.intent.action.INSERT", null,
        "android.intent.Events.CONTENT_URI", "vnd.android.cursor.item/event", extras);
}
</sample>

<sample Receive Broadcasts>
function OnStart()
{
    app.EnableBackKey(false);

    app.SetOnBroadcast(rb, "android.intent.action.HEADSET_PLUG");
    app.SetOnBroadcast(rb, "android.intent.action.SOUND_SETTINGS");
    app.SetOnBroadcast(rb, "android.media.VOLUME_CHANGED_ACTION");
    app.SetOnBroadcast(rb, "android.intent.action.TIME_TICK");
    app.SetOnBroadcast(rb, "android.AccessibilityService.FINGERPRINT_GESTURE_SWIPE_DOWN");
    app.SetOnBroadcast(rb, "android.action.CAMERA_BUTTON");
    app.SetOnBroadcast(rb, "android.action.MEDIA_BUTTON");

    app.SetOnBroadcast(rb, "android.bluetooth.a2dp.profile.action.CONNECTION_STATE_CHANGED");
    //app.SetOnBroadcast( rb ,"android.bluetooth.a2dp.profile.action.PLAYING_STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.adapter.action.CONNECTION_STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.adapter.action.DISCOVERY_FINISHED");
    app.SetOnBroadcast(rb, "android.bluetooth.adapter.action.DISCOVERY_STARTED");
    app.SetOnBroadcast(rb, "android.bluetooth.adapter.action.LOCAL_NAME_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.adapter.action.SCAN_MODE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.adapter.action.STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.ACL_CONNECTED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.ACL_DISCONNECTED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.ACL_DISCONNECT_REQUESTED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.BOND_STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.CLASS_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.FOUND");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.NAME_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.device.action.UUID");
    app.SetOnBroadcast(rb, "android.bluetooth.devicepicker.action.DEVICE_SELECTED");
    app.SetOnBroadcast(rb, "android.bluetooth.devicepicker.action.LAUNCH");
    app.SetOnBroadcast(rb, "android.bluetooth.headset.action.VENDOR_SPECIFIC_HEADSET_EVENT");
    app.SetOnBroadcast(rb, "android.bluetooth.headset.profile.action.AUDIO_STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.headset.profile.action.CONNECTION_STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.input.profile.action.CONNECTION_STATE_CHANGED");
    app.SetOnBroadcast(rb, "android.bluetooth.pan.profile.action.CONNECTION_STATE_CHANGED");
}

function rb(type, msg) {
    alert(JSON.stringify(type));
    //alert(JSON.stringify(msg));
}

function handleReply(error, reply) {
    alert(JSON.stringify(error));
    alert(JSON.stringify(reply));
}

function OnBack() { app.ToFront(); }
function OnPause() { app.ToFront(); }
</sample>
