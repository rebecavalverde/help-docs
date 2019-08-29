---
title: Accelerando & Ritardando
permalink: en/music-notation-software/tempo-changes.html
description: Add accelerando and ritardando with Flat editor.
nav: editor
pid: tempo-changes
action.tempoChange: true
action.toggleAccelerando: true
action.toggleRitardando: true
---

## Summary

| Feature | Toolbar | Icon |
|:--------|:--------|:-----|
| Accelerando | **Measure** | ![Accelerando](https://prod.flat-cdn.com/img/icons/editorActions/accelerando.svg){:.tb} |
| Ritardando  | **Measure** | ![Ritardando](https://prod.flat-cdn.com/img/icons/editorActions/ritardando.svg){:.tb} |
{:.feat}

**Note**: At this time Accelerando and Ritardando are not interpreted by our playback (you will have the notation written on your score/tab, but not the corresponding sound). To learn more about our playback interpretation, [check out the dedicated audio playback help page](/help/en/music-notation-software/playback.html).

## What is an accelerando?

An accelerando is a gradual tempo increase.
While a classic tempo marking will change the tempo immediately, an accelerando will increase the tempo gradually during all the duration of the accelerando, sometimes across multiple measures.
The final tempo is often specified at the end of the accelerando range.
Once played, the final tempo should be kept.

## What is a ritardando?

A ritardando is exactly the same thing than an accelerando but with a gradually *decreasing* tempo.

## How to use accelerando and ritardando on Flat?

Accelerando and ritardando are available in the *Measure* menu and are manipulated in the same way than most Measure tools.

Once clicked, the desired marking will be added from the cursor location to the end of the measure.
Like others *range* markings on Flat, accelerandos and ritardandos have the ability to be moved horizontally along the part through drag and drop.

They can also be shrunk or expanded using one of the two round handles on both extremities of the marking.

To remove accelerandos and ritardandos, you can either click on the accel/rit button while the cursor is located in the range of the marking, or you can directly select the marking and press the "Delete" shortcut on your keyboard or use the "Remove an element" button in the *Measure* menu.

![Accelerando example](/help/assets/img/editor/accelerando.gif)

## Implementation notes

Please note that accelerandos and ritardandos aren't supported by the playback engine yet.
We expect to release an implementation in 2019.