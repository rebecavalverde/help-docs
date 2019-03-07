---
title: MIDI Troubleshooting
description: Most common issues when trying to have a MIDI device recognized, and how to solve them.
nav: editor
pid: midi
permalink: en/music-notation-software/midi-troubleshooting.html
---

Most of the modern MIDI devices are automatically set up once plugged to a modern computer.
However, for older devices and computers and for some exceptions, it may not be recognized once you plug it in.

This page purpose is to list the most common issues when setting up your MIDI device and how to solve them.

## Missing Drivers

The most common issue is when the MIDI device driver is missing. A "driver" is a software component which needs to be installed on the computer in order to communicate with the MIDI device.

There are different ways to find the correct driver for your device.
Often, a CD will be packaged with the MIDI device, containing all the necessary components to run the device, including the drivers.

If you don't have a CD, no worries! You can also find your device driver online. The safest place to get it is from the MIDI device manufacturer website. You can find a list of the most popular manufacturer's website [on this page](/help/en/music-notation-software/midi-drivers.html) with the direct link to the driver's download page for each brand.

With modern devices and systems, the drivers are automatically installed by the system, or replaced by a generic driver, making the driver installation pointless.

## Issue while using a MIDI to USB adapter

MIDI devices older than 15 years were not always including a USB port to transmit MIDI signals. Instead, MIDI ports were used for this purpose.

The only way to use these MIDI devices as MIDI controllers with your computer is to use a MIDI to USB adapter.

![MIDI USB adapter](/help/assets/img/midi/midiusbadapter.jpg)

Those are then quite easy to set up, as they are plug-and-play.
Yet, a common mistake is to invert the two MIDI wires of the adapter. It may, in fact, be confusing which wire needs to go to which MIDI port.

To make it simple just follow these instructions:

 - The MIDI In wire goes into the MIDI Out port.
 - The MIDI Out wire goes into the MIDI In port.

You will also need to make sure that the MIDI Output connection of your MIDI device is enabled.

If you still cannot have your device recognized, the best thing you can do is to contact your MIDI device manufacturer so they can help you to connect it.


