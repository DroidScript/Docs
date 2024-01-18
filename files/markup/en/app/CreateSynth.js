// ------------- HEADER SECTION -------------


/** # CreateSynth #
 * @abbrev syn
 * @brief Returns a new Synth object
 * 
 * $$ syn = app.CreateSynth(type='Signal') $$ 
 * @param {str_com} [type='Signal'] Signal,VCA|VCF
 * @returns dso-Synth
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Returns a Synth object which can produces a variety of sounds, sound effects and music.
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
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetType ###
 * Returns the control class name.
 * $$ syn.GetType() $$
 * @returns str-Synth
 */


/** ### PlayMidiTune ###
 * @brief Play a sequence of notes
 * Play a comma-separated sequence of “midi_note&colon;duration” pairs.
 * $$ syn.PlayMidiTune(tune) $$
 * @param {str_com} tune note1&colon;duration1&comma;note2&colon;duration2&comma;...
 */


/** ### PlayNote ###
 * @brief Play a single note
 * Plays a single note
 * $$ syn.PlayNote(note) $$
 * @param {num_int} note 0..125
 */


/** ### PlayTone ###
 * Plays a frequency tone.
 * $$ syn.PlayTone(frequency, duration) $$
 * @param {num:frequency} frequency 
 * @param {num_mls} duration 
 */


/** ### SetDelay ###
 * @brief Change delay effect difference
 * Change the delay effect difference
 * $$ syn.SetDelay(milliseconds) $$
 * @param {num_mls} milliseconds 
 */


/** ### SetDelayEnabled ###
 * Enables the delay effect (plays every note a second time after a given delay)
 * $$ syn.SetDelayEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFeedback ###
 * @brief Adds a delay feedback effect
 * Adds a feedback effect when delay is enabled
 * $$ syn.SetFeedback(feedback) $$
 * @param {num_frc} feedback 
 */


/** ### SetFrequency ###
 * @brief Set current frequency
 * Set the current played frequency
 * $$ syn.SetFrequency(frequency) $$
 * @param {num} frequency 
 */


/** ### SetNoteLength ###
 * @brief Set whole note length
 * Set the length of a whole note in seconds. Defaults to 2.56
 * $$ syn.SetNoteLength(duration) $$
 * @param {num_sec} duration 
 */


/** ### SetPhaser ###
 * @brief Initializes phaser
 * Initializes the phaser effect
 * $$ syn.SetPhaser(drywet, rate, range, feedback) $$
 * @param {num_frc} drywet 
 * @param {num} rate 
 * @param {num} range 
 * @param {num_frc} feedback 
 */


/** ### SetPhaserDryWet ###
 * @brief Control unprocessed/delayed signals ratio
 * Control producing of unprocessed (0) and delayed (1) signals (whatever this means)
 * $$ syn.SetPhaserDryWet(drywet) $$
 * @param {num_frc} drywet 
 */


/** ### SetPhaserEnabled ###
 * En/Disables phaser effect
 * $$ syn.SetPhaserEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetPhaserFeedback ###
 * Enables phaser feedback
 * $$ syn.SetPhaserFeedback(feedback) $$
 * @param {num_frc} feedback 
 */


/** ### SetPhaserRange ###
 * Set sweep range
 * $$ syn.SetPhaserRange(range) $$
 * @param {num} range 
 */


/** ### SetPhaserRate ###
 * Set sweeps per second
 * $$ syn.SetPhaserRate(rate) $$
 * @param {num} rate 
 */


/** ### SetVca ###
 * Initializes the VCA
 * $$ syn.SetVca(attack, decay, sustain, release) $$
 * @param {num_mls} attack 
 * @param {num_mls} decay 
 * @param {num_frc} sustain 
 * @param {num_mls} release 
 */


/** ### SetVcaAttack ###
 * @brief Set a time of maximum volume
 * Set a time where the volume should reach a maximum
 * $$ syn.SetVcaAttack(attack) $$
 * @param {num_mls} attack 
 */


/** ### SetVcaDecay ###
 * @brief Controls time when volume is lowered to sustain
 * Controls time in which the volume is lowered to the sustain value
 * $$ syn.SetVcaDecay(decay) $$
 * @param {num_mls} decay 
 */


/** ### SetVcaEnabled ###
 * En/Disables VCA effect
 * $$ syn.SetVcaEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetVcaRelease ###
 * @brief set a time of minimum volume
 * Set a time where the volume should reach a minimum
 * $$ syn.SetVcaRelease(release) $$
 * @param {num:mls} release 
 */


/** ### SetVcaSustain ###
 * Set a basis volume
 * $$ syn.SetVcaSustain(sustain) $$
 * @param {num_frc} sustain 
 */


/** ### SetVcf ###
 * Initialize the VCF effect
 * $$ syn.SetVcf(attack, decay, sustain, release, cuttoff, resonance, depth?) $$
 * @param {num_mls} attack 
 * @param {num_mls} decay 
 * @param {num_frc} sustain 
 * @param {num_mls} release 
 * @param {num:frequency} cuttoff 
 * @param {num_frc} resonance 
 * @param {num_frc} [depth] 
 */


/** ### SetVcfAttack ###
 * @brief Set a time of maximum frequencies
 * Set a time where the frequencies should reach a maximum
 * $$ syn.SetVcfAttack(attack) $$
 * @param {num_mls} attack 
 */


/** ### SetVcfCutoff ###
 * Set a maximum frequency which will never be exceeded
 * $$ syn.SetVcfCutoff(cuttoff) $$
 * @param {num:frequency} cuttoff 
 */


/** ### SetVcfDecay ###
 * @brief Controls time when frequency is lowered to sustain
 * Controls time in which the frequency is lowered to the sustain value.
 * $$ syn.SetVcfDecay(decay) $$
 * @param {num_mls} decay 
 */


/** ### SetVcfDepth ###
 * @brief Set filter strength
 * Set the strength of the Vcf filter
 * $$ syn.SetVcfDepth(depth) $$
 * @param {num_frc} depth 
 */


/** ### SetVcfEnabled ###
 * En/Disables VCF effect
 * $$ syn.SetVcfEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetVcfRelease ###
 * @brief set a time of minimum frequency
 * Set a time where the volume should reach a minimum
 * $$ syn.SetVcfRelease(release) $$
 * @param {num_mls} release 
 */


/** ### SetVcfResonance ###
 * Adds a resonance tone
 * $$ syn.SetVcfResonance(resonance) $$
 * @param {num_frc} resonance 
 */


/** ### SetVcfSustain ###
 * Set a basis frequency
 * $$ syn.SetVcfSustain(sustain) $$
 * @param {num_frc} sustain 
 */


/** ### SetVolume ###
 * @brief Set master volume
 * Set the overall synthesizer volume
 * $$ syn.SetVolume(left, right) $$
 * @param {num_frc} left 
 * @param {num_frc} right 
 */


/** ### SetWaveShape ###
 * Set the wave shape of the synthesizer
 * $$ syn.SetWaveShape(shape) $$
 * @param {str} shape Sin,Saw,Square,White
 */


/** ### Start ###
 * Start playing
 * $$ syn.Start() $$
 */


/** ### Stop ###
 * Stop playing
 * $$ syn.Stop() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Tetris Theme
function OnStart()
{
    syn = app.CreateSynth();
    syn.SetWaveShape( "Saw" );
    syn.SetVcaSustain( 0.5 );
    syn.SetVolume( 1, 1 );
    syn.SetNoteLength( 2 );

    syn.PlayMidiTune(
        "76:4,71:8,72:8,74:4,72:8,71:8,69:4,69:8,72:8,76:4," +
        "74:8,72:8,71:4,71:8,72:8,74:4,76:4,72:4,69:4,69:8," +
        "69:8,71:8,72:8,74:8,74:4,77:8,81:4,79:8,77:8,76:8,76:4,72:8,76:4," +
        "74:8,72:8,71:4,71:8,72:8,74:4,76:4,72:4,69:4,69:4"
    );
}
 */
    
            
    
/**
@sample Multiple Synths Song
function OnStart()
{
    synth1 = app.CreateSynth();
    synth1.SetWaveShape( "Saw" );
    synth1.SetVcaSustain( 0.5 );
    synth1.SetVcaDecay( 500 );
    synth1.SetVolume( 1, 1 );

    synth2 = app.CreateSynth();
    synth2.SetWaveShape( "Saw" );
    synth2.SetVcaDecay( 300 );
    synth2.SetVolume( 1, 1 );

    setTimeout('synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")', 0*5120);
    setTimeout('synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")', 1*5120);
    setTimeout('synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")', 2*5120);
    setTimeout('synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")', 3*5120);
    setTimeout('synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")', 4*5120);
    setTimeout('synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")', 5*5120);

    setTimeout('synth2.PlayMidiTune("59:4,59:8,59:8,62:8,59:4,57:8,55:2,54:2")', 2*5120);
    setTimeout('synth2.PlayMidiTune("59:8,59:4,59:8,62:8,59:4,57:8,55:8,57:4,55:8,54:2")', 3*5120);
    setTimeout('synth2.PlayMidiTune("59:4,59:8,59:8,62:8,59:4,57:8,55:2,54:2")', 4*5120);
    setTimeout('synth2.PlayMidiTune("59:8,59:4,59:8,62:8,59:4,57:8,55:8,57:4,55:8,54:2")', 5*5120);
}
 */
    
            
    
/**
@sample Python Tetris Theme
from native import app

def OnStart():
    syn = app.CreateSynth()
    syn.SetWaveShape("Saw")
    syn.SetVcaSustain(0.5)
    syn.SetVolume(1, 1)
    syn.SetNoteLength(2)

    syn.PlayMidiTune(
        "76:4,71:8,72:8,74:4,72:8,71:8,69:4,69:8,72:8,76:4," +
        "74:8,72:8,71:4,71:8,72:8,74:4,76:4,72:4,69:4,69:8," +
        "69:8,71:8,72:8,74:8,74:4,77:8,81:4,79:8,77:8,76:8,76:4,72:8,76:4," +
        "74:8,72:8,71:4,71:8,72:8,74:4,76:4,72:4,69:4,69:4"
    )
 */
    
            
    
/**
@sample Python Multiple Synths Song
from native import app

def OnStart():
    synth1 = app.CreateSynth()
    synth1.SetWaveShape("Saw")
    synth1.SetVcaSustain(0.5)
    synth1.SetVcaDecay(500)
    synth1.SetVolume(1, 1)

    synth2 = app.CreateSynth()
    synth2.SetWaveShape("Saw")
    synth2.SetVcaDecay(300)
    synth2.SetVolume(1, 1)

    def playSynth1():
        synth1.PlayMidiTune("35:4,35:4,35:4,35:4,31:4,31:4,30:4,30:4")

    def playSynth2():
        synth2.PlayMidiTune("59:4,59:8,59:8,62:8,59:4,57:8,55:2,54:2")

    setTimeout(playSynth1, 0*5120)
    setTimeout(playSynth1, 1*5120)
    setTimeout(playSynth1, 2*5120)
    setTimeout(playSynth1, 3*5120)
    setTimeout(playSynth1, 4*5120)
    setTimeout(playSynth1, 5*5120)

    setTimeout(playSynth2, 2*5120)
    setTimeout(playSynth2, 3*5120)
    setTimeout(playSynth2, 4*5120)
    setTimeout(playSynth2, 5*5120)
 */
    
            