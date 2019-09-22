ChooseWifi lets the user select a WiFi network in his range.

**title1** and **title2** are the titles for the scanning and the selection process. They default to “Scanning” and “Select WiFi”.

The **callback** function returns the name and the ssid of the selected network.

You can set the _force_ option so that the dialog cannot be closed until the user has selected an item.

Finally you can add extra items as pipe “|” separated string - ie. to add a default “[None]” entry to select no wifi network.

See Also:  @WifiConnect
