Returns a Synth object which ca produces a variety of sounds, sound effects and music.
%c

### Some descriptions
**note length:** default is 2.56 seconds.
**midi note:** like n'th key on a keyboard between 0 and ~125. 12 keys are one octave. Ie. the 4'th octave:
	C:60,C#:61,D:62,D#:63,E:64,F:65,F#:66,G:67,G#:68,A:69,A#:70,B:71.
**duration:** powers of two indicating whole, half, quarter etc. up to thirty second notes.
**frequency:** A4 equals 440 Hz. Each note frequency is 12&radic;2 (~1.06) times higher than the previous.
	Humans can hear a range from 10 to about 20,000 Hz. My phone's range is from 0 to about 11025 Hz

**Phaser:** a sound filter which creates a series of peaks and troughs in the frequency spectrum
**VoltageControlledAmplifier:** (Variable-Gain Amplifier) electronic amplifier that varies its gain
**Voltage-Controlled Filter:** electronic amplifier that varies the frequency
