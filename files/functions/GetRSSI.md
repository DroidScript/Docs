Returns the current _**R**eceived **S**ignal **S**trength **I**ndication_ which is a measurement of the power present in a received WiFi signal in dBm (decibel milliwatt).

### Understanding RSSI
<table>
	<thead align='left'>
		<tr>
			<th width="15%">Signal Strength</th>
			<th width="10%">TL;DR</th>
			<th width="20%">Required for</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>-30 dBm</td>
			<td>Amazing</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>-67 dBm</td>
			<td>Very Good</td>
			<td>VoIP/VoWiFi, streaming video</td>
		</tr>
		<tr>
			<td>-70 dBm</td>
			<td>Okay</td>
			<td>Email, web</td>
		</tr>
		<tr>
			<td>-80 dBm</td>
			<td>Not Good</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>-90 dBm</td>
			<td>Unusable</td>
			<td>N/A</td>
		</tr>
		<tr>
			<td>-127 dBm</td>
			<td>Disabled</td>
			<td>N/A</td>
		</tr>
	</tbody>
</table>
source: [metageek.com](https://www.metageek.com/training/resources/understanding-rssi.html)

See Also: @SetWifiEnabled, @IsWifiEnabled
