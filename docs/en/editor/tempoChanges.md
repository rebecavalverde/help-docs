---
title: Accelerando & Ritardando
permalink: en/music-notation-software/tempo-changes.html
description: Add accelerando and ritardando with Flat editor.
nav: editor
pid: tempo-changes
tempoChange.title: Tempo changes
toggleAccelerando.title: Accelerando
toggleAccelerando.shortDescription: Add or remove an accelerando at the cursor location
toggleAccelerando.purpose: Accelerandos are meant to gradually increase the tempo so it becomes faster and faster within the accelerando range.
toggleRitardando.title: Ritardando
toggleRitardando.shortDescription: Add or remove a ritardando at the cursor location
toggleRitardando.purpose: Ritardandos are meant to gradually decrease the tempo so it becomes slower and slower within the ritardando range.
---

## Summary

| Feature | Toolbar | Icon |
|:--------|:--------|:-----|
| Accelerando | **Measure** | ![Accelerando](https://prod.flat-cdn.com/img/icons/editorActions/accelerando.svg){:.tb} |
| Ritardando  | **Measure** | ![Ritardando](https://prod.flat-cdn.com/img/icons/editorActions/ritardando.svg){:.tb} |
{:.feat}

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