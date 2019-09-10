The PhoneState component is able to detect phone state changes.

The callback data depends on the type:

<smp>“CellLocation” : **object:** { cellId:num\_int, areaCode:num\_int }</smp>
<smp>“DataConnection” : **object:** { state:str-"Connected|Disconnected", networkType:str-Unknown }</smp>
<smp>“DataActivity” : **unknown**</smp>
<smp>“CallState” : **object:** { state:str-Idle, number:str\_num }</smp>
<smp>“ServiceState” : **string:** “OutOfService”</smp>
<smp>“SignalStrength” : **number:** _float_</smp>
<smp>“CallForwarding” : **boolean**</smp>
<smp>“MessageWaiting” : **boolean**</smp>
