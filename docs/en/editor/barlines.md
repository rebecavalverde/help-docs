---
title: Barlines and Repeats
permalink: en/music-notation-software/barlines.html
description: Add double barlines and barline repeats on Flat editor
nav: editor
pid: barlines

action.barline: true
action.toggleDoubleBarline: true
action.toggleLeftRepeatBarline: true
action.toggleRightRepeatBarline: true
---

## Summary

| Feature | Toolbar | Icon | Default Keyboard shortcut |
|:--------|:--------|:-----|:------------------|
| Double barline | **Measure** | ![Double barline](https://prod.flat-cdn.com/img/icons/editorActions/barlineDouble.svg){:.tb} |  |
| Left barline repeat | **Measure** | ![Left barline repeat](https://prod.flat-cdn.com/img/icons/editorActions/barlineRepeatLeft.svg){:.tb} | <span class="kbs-multi"><span class="kb-container"><span class="kb">[</span></span></span> |
| Right barline repeat | **Measure** | ![Right barline repeat](https://prod.flat-cdn.com/img/icons/editorActions/barlineRepeatRight.svg){:.tb} | <span class="kbs-multi"><span class="kb-container"><span class="kb">]</span></span></span> |
| Multiple Repeats | **Measure** | ![Multiple Repeats](https://prod.flat-cdn.com/img/icons/editorActions/repeatXTimes.svg){:.tb} |  |
{:.feat}

## What are barline repeats?

Barline repeats indicate to repeat one or several measures of a score.
The left and right barline repeat symbols are used to wrap the section of the score which has to be repeated. The wrapped measures will be played one more time, once the right barline repeat marking has been reached.

It is allowed to omit the left barline repeat. In this case, the repeated section will start at the first measure of the score.

Barline repeats can also be nested. In such cases, the nested repeat markings will only be used the first time, then these sections will only be played once.

## What is the purpose of a double barline

The double barlines are used to highlight a change of "section" in the score. Some conventions require to display a double barline when there is a change of key.

## How to use barline tools on Flat?

Barline repeats and double barlines tools are available in the *Measure* menu and are manipulated in the same, handy way.

A single click will add the desired barline marking on the measure where the cursor is located.
Another click will remove this marking.

The changes will be applied to every part in the score, in order to keep consistency.

![Barlines](/help/assets/img/editor/barlines.gif)

## Multiple Repeats

If you need to repeat a section more than one time, you can use the custom measure repeat. To use it, select the last measure of the section to be repeated, click on the button, then input the number of times you want it to be repeated. 

![Multiple Repeats](/help/assets/img/editor/multiple-repeats.gif)

In the example above, the section will be played 4 times (repeated 3 times). 
