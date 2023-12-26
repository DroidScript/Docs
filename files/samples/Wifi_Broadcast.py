from android import app
from native import app
import socket
import threading

# Called when application is started.
def OnStart():
    global net, address, thisId
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a button.
    btn = app.CreateButton("Send", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(btn_OnTouch)

    # Add layout to app.
    app.AddLayout(lay)

    # Create UDP network object.
    net = app.CreateNetClient("UDP")
    net.SetOnReceive(net_OnReceive)

    # Get the UDP broadcast address and set our port number.
    address = net.GetBroadcastAddress()

    # Watch for incoming messages.
    receive_thread = threading.Thread(target=receive_datagrams, args=(net, 19700, "UTF-8"))
    receive_thread.start()

    # Get our device id.
    thisId = app.GetDeviceId()

# Called when user touches our button.
def btn_OnTouch():
    # Broadcast our Datagram (UDP) packet.
    msg = "Hello"
    packet = thisId + "|" + msg
    net.SendDatagram(packet, "UTF-8", address, 19700)

# Handle incoming UDP messages.
def net_OnReceive(data):
    print(address + ": " + data)

    # Extract original parts.
    parts = data.split("|")
    id = parts[0]
    msg = parts[1]

    # Show the message (that doesn't come from us).
    if id != thisId:
        app.ShowPopup(msg)

# Function to receive datagrams from UDP
def receive_datagrams(net, port, encoding):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((socket.gethostname(), port))

    while True:
        data, addr = sock.recvfrom(1024)  # buffer size is 1024 bytes
        data = data.decode(encoding)
        net.OnReceive(data, addr)