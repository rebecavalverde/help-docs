---
title: MIDI Output Setup
description: Connect Flat to any software or hardware accepting MIDI input. Learn how to connect your favorite music notation editor to synthesizers, sequencers and samplers (like Kontakt).
nav: editor
pid: midi
permalink: en/music-notation-software/midioutput.html
---

Flat power users get an exclusive access to our MIDI output feature.
Often underestimated, this feature allows you to connect Flat with any MIDI compatible software or hardware. Once connected the audio stream will be redirected to the synthesizer, sequencer, sampler or MIDI device you chose, replacing Flat sounds by the one you want.

## Setup with a MIDI compatible software

Each software offering a real-time MIDI input can be connected to Flat through the MIDI output feature.

### Create a virtual MIDI port

However, to do so, we first need to create a Virtual MIDI port which will serve as an interface between Flat and the external software.

#### On MacOS
It is quite easy to create a virtual MIDI port on MacOS as you don't need to install any additional software.

1. In Spotlight, search for MIDI and launch the Audio MIDI Setup utility.
![Search for Audio MIDI Setup](/help/assets/img/midi/01_spotlight.png)
2. Make sure the MIDI Studio is displayed by selecting it in the Window menu.
![Audio MIDI Setup menu](/help/assets/img/midi/02_midistudio.png)
3. Double click on the IAC Driver icon. The IAC Driver Properties window will open.
![IAC Driver button](/help/assets/img/midi/03_iacdriver.png)
4. Now create a new port by clicking on the "+" button, and name it "Flat Virtual Port" for example.
![IAC Driver create port](/help/assets/img/midi/04_createport.png)
5. The port should now be available in Flat MIDI Output list.

#### On Windows and Linux
Windows and Linux don't offer a built-in way to create virtual MIDI ports, so you will have to install a third-party software.

1. Download the [loopMIDI](http://www.tobias-erichsen.de/wp-content/uploads/2015/08/loopMIDISetup_1_0_13_24.zip) software created by Tobias Erichsen.
2. Unzip it and proceed to the setup.
3. Once installed, launch it.
![Search for loopMIDI](/help/assets/img/midi/02_search_startmenu-resize.gif)
4. Give a name to your port in the text field at the bottom, "Flat Virtual Port" for example.
![Create port in loopMIDI](/help/assets/img/midi/03_portcreation.gif)
5. Then, just click on the + button in the bottom-left corner to create it.

#### On ChromeOS
It is not possible at the moment to create virtual MIDI ports on ChromeOS. We will probably need to wait for a web browser built-in implementation.

### Connecting to an external software

Once the virtual port has been created, just select it in the Output tab of Flat MIDI menu.
![Select output port in Flat](/help/assets/img/midi/04_deviceselection.png)

Finally, select the virtual port as an Input in the preferences of the software you want to connect.
Below is an example with Kontakt 5.
![Select input port in Kontakt](/help/assets/img/midi/05_selectinputport.gif)

If no MIDI input is available for the virtual instrument, you can use a Digital Audio Workstation (DAW), like Cubase, FL Studio or Ableton Live to embed the virtual instrument, then select the input on the DAW.

## Setup with a MIDI device

To redirect Flat audio stream to a MIDI device, select your device in the Output tab of the MIDI menu. You may also have to configure your MIDI device so it accepts a MIDI input.

## Implementation Note
- Each part will be assigned a different MIDI channel (up to 16 parts, due to MIDI limitation), in the same order than your score layout.
- Keyswitches and several ornaments won't be played yet. We aim to implement them later in the future.

