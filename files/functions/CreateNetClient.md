NetClients can be used to communicate with servers on the web. You can choose between two different protocols:
	The connection based _**T**ransmission**C**ontrol**P**rotocol_ which always checks if the data was received correctly and in right order. It is used in most cases because it is very reliable. The downside is that it is relatively slow becaus of the numerous checks.
	The connectionless _**U**ser**D**atagram**P**rotocol_ which sends the data once without any checks so that packages may be corrupt or lost completely during the transmission. Because of that data can be sent as fast as possible and it suits perfectly for games which need a fast update rate between the devices.

Note: A few routers block fast UDP messages by default