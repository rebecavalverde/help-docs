---
title: Add figured bass notation
description: Select the position you want to bind with a chord, click on the Figured Bass button, and just type it.
nav: editor
pid: figuredBass
permalink: en/music-notation-software/figured-bass.html
---

## Summary

| Feature | Toolbar | Icon | Default Keyboard shortcut |
|:--------|:--------|:-----|:------------------|
| Figured Bass | **Text** | ![Figured Bass](https://prod.flat-cdn.com/img/icons/editorActions/figuredBass.svg){:.tb} | <span class="kbs-multi"><span class="kb-container"><span class="kb">Ctrl</span> + <span class="kb">B</span></span> or <span class="kb-container"><span class="kb">⌘</span> + <span class="kb">B</span></span></span>
{:.feat}

## What is Figured Bass Notation

Figured Bass notation is a way to represent chords, based on a note in the staff that serves as a bass note. From this note, we add numbers which represent the degrees added to the bass note to form the chord. 

![C Major](/help/assets/img/editor/figuredBass-c-major.png)

In this example, we add a 3rd and a 5th to have a major chord. As this chord is very common, the 3 and the 5 are usually omitted.

Here is how to represent the first and the second inversion of a C major chord. 

![First and second inversions](/help/assets/img/editor/figuredBass-inversions.png)

## Alterations

It is possible to lower/raise degrees, by using and accidental, `+`, `/` and `\`. 
When an accidental appears alone, it means it is applied to the 3rd degree. 
You can see this with the minor C chord in the example below. 

![First and second inversions](/help/assets/img/editor/figuredBass-c-minor.png)

There are different conventions on how to apply accidentals before degrees. One some conventions, the alteration for the degree is applied on top of the alteration of the key signature. On some other, the key signature alteration is ignored. 
If there is a `flat` at the key, a `sharp` before a figure digit could either result in the note sounding `sharped` or `natural`, depending on the convention in use. 

Here are the list of notations you can write **before** a degree: 

| Alteration    | Text input on Flat  | Effect                    | 
|:--------------|:--------------------|:--------------------------|
| Plus          | +                   | Raise by 1/2 tone         |
| Sharp         | #                   | Raise by 1/2 tone         |
| Double Sharp  | ##                  | Raise by 1 tone           |
| Natural       | n                   | Cancel the key signature  |
| Flat          | b                   | Lower by 1/2 tone         |
| Double Flat   | bb                  | Lower by 1 tone           |
{:.feat}

And here are the ones you can write **after** a degree:

| Alteration  | Text input on Flat  | Effect            | 
|:------------|:--------------------|:------------------|
| Slash       | /                   | Lower by 1/2 tone |
| Back-Slash  | \                   | Raise by 1/2 tone |
{:.feat}

## Figured Bass input on Flat

You need to be on the **Text** toolbar, and click on the **Figured Bass** icon. Then place the cursor where you want to input it, and write the degrees/alterations you need. You can stack degrees using **Enter**, and go to the next note with the **left/right** arrow keys. 

![First and second inversions](/help/assets/img/editor/figuredBass-edition.gif)

## Figured Bass Keyboard Shortcuts

| Go to the next Chord | <span class="kb-container"><span class="kb">⇢</span></span> |
| Go to the previous Chord | <span class="kb-container"><span class="kb">⇠</span></span> |
| Go to a lower Figure | <span class="kbs-multi"><span class="kb-container"><span class="kb">⇣</span></span> or <span class="kb-container"><span class="kb">Enter</span></span></span> |
| Go to a higher Figure | <span class="kb-container"><span class="kb">⇡</span></span> |
| Exit the Figured Bass mode | <span class="kb-container"><span class="kb">Esc</span></span> |
{:.feat}
