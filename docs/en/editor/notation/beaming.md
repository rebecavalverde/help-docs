---
title: Notes beaming
description: Configure automatic beaming and manual notes beaming
nav: editor
pid: notes-beaming
permalink: en/music-notation-software/notes-beaming.html

beaming.title: Beaming notes
toggleForceBeam.title: Force beaming
toggleForceUnbeam.title: Force unbeaming
---

*This feature is available in our private beta, contact us if you want to have access to this upcoming release.*

## Summary

| Feature | Toolbar | Icon | Default Keyboard shortcut |
|:--------|:--------|:-----|:------------------|
| [Beaming Policy](#automatic-beaming-policy) | **Note** | ![Beaming Policy](https://prod.flat-cdn.com/img/icons/editorActions/beamPolicy.svg){:.tb} | None |
| [Force beam](#manual-notes-beaming) | **Note** | ![Force beam](https://prod.flat-cdn.com/img/icons/editorActions/beam.svg){:.tb} | None |
| [Force un-beam](#manual-notes-beaming) | **Note** | ![Force un-beam](https://prod.flat-cdn.com/img/icons/editorActions/unbeam.svg){:.tb} | None |
{:.feat}

## What is a beam?

A beam is a horizontal or diagonal line used to connect multiple consecutive notes to indicate rhythmic grouping. By default on Flat, we automatically beam the notes by beat. That's something you can easily customize by changing the automatic beaming policy, or manually beam or un-beam notes.

## Automatic beaming policy

If you don't want to beam the notes by beat, you can set your own beaming policy that will apply on the complete sheet music, or a specific section of the score by selecting the notes.

Some examples:

* In **4/4**, by default Flat uses the "**1 + 1 + 1 + 1**" beaming rule, which means the notes are beamed by beat. If you change to "**2 + 2**", the eighth notes will be beamed by 4 (so two beats).
* In **6/8**, the most common notation is to group the eighth by 3 (**3 + 3**), or 2 (**2 + 2 + 2**).

Here is a quick demo in **6/8** of changing the beaming policy from **3 + 3 + 3** to **2 + 2**, then setting a custom policy to **1 + 3 + 2**.

![Beaming Policy](/help/assets/img/editor/beaming.gif)

## Manual notes beaming

Alternatively to the automatic beaming, you can force to beam or un-beam notes. When you select a single note, the settings will apply to the selected note and the next one. You can also quickly beam multiple notes together by selecting them, then clicking on *Force beam*.

![Force beam/un-beam](/help/assets/img/editor/force-beam.gif)
