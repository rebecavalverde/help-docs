---
title: MIDI Input / MIDI Output
description: Flat MIDI Input / Output, use your MIDI devices to compose in your web browser with Flat. Discover the multiple MIDI options at your disposal.
nav: editor
pid: midi
permalink: en/music-notation-software/midi.html
---

Flat make use of built-in solutions to connect Flat to your MIDI devices, DAW and sequencers through MIDI ports. This help page explains how to use both the [MIDI input](#midi-input) and [MIDI output](#midi-output) features.

## Implementation notes

The MIDI Input and Output features are still at an early development stage and several critical features aren't supported yet.

For the MIDI input :
* Automatic voice / staff splitting
* Dynamics / effects recognition
* Tempo changes / Triplet recognition

For the MIDI output :
* Keyswitches (to switch from Arco mode to Pizzicato mode for example)

We are really aware of these missing features and will work on improving them in the near future.

## MIDI port selection

The MIDI selection menu is divided into two sections: input and output ports.
Each section allows to select one port. However, a port cannot be selected as an input and as an output at the same time.

The MIDI selection menu also offers a way to disable the step mode, in order to play with the MIDI device and Flat sounds, without having notes being written on the score.

## MIDI Input

Two different modes are available while using your MIDI devices to input notes on a score :

### Step mode

The step mode is the default input mode, automatically activated as soon as you connect a MIDI device to Flat.

Once a note has been pressed and released on the device, this note will be set at the cursor location, taking the same duration that the previous note or rest.

Chords are also supported and will make the composition process frictionless.

### Real-time recording

To start a MIDI recording, click on the record button just beside the play button.

If it's the first time the real-time recording feature is being used with this device, the MIDI calibration window will appear.
The purpose of this calibration is to understand the duration the average note is being held and the delay between each, depending on the note sequence. This step isn't mandatory and it is skippable by clicking on the Skip button.

Then, a dark overlay will take place and the metronome will start counting, indicating the start of the recording. Once the sequence has been played, it needs to be stopped by clicking on the stop button. The notes will be analyzed and set from the cursor location, overriding the existing notes on this range.

## MIDI Output

The MIDI output feature allows redirecting the audio flux to another MIDI-compatible software, or MIDI device, through a MIDI port.
It opens great playback possibilities, the most obvious usage being with Native Instrument's Kontakt.
Once an output port has been selected in the MIDI selection menu, each part will be assigned a MIDI channel following the layout order (up to 16 parts, due to MIDI limitations).