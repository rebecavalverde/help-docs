---
title: Synchronize an external audio recording with your score
description: Replace Flat's playback with your own recording hosted on YouTube, SoundCloud or Vimeo on any of your scores. Quickly synchro
nav: editor
pid: ext-recording
permalink: en/music-notation-software/synchronize-external-recording.html
---

By default, Flat provides [a great audio playback](/help/en/music-notation-software/playback.html) that interprets the music you write and discover directly in your web browser. However, sometimes you want to play a recording of the score or tab to listen to a real interpretation of the creation, or simply help you transcribe it on your score.

You can simply link and synchronize music recordings with your sheet music from the following services:

* ![Youtube](https://prod.flat-cdn.com/img/icons/product/yt.svg) YouTube
* ![SoundCloud](https://prod.flat-cdn.com/img/icons/product/soundcloud-small.svg) SoundCloud
* <img src="https://prod.flat-cdn.com/img/icons/product/vimeo-small.svg" alt="Vimeo" width="16px"/> Vimeo
{:.nobullets}

You can also add multiple external recordings to your score and choose what will be played by default when someone will open your score. The external recordings are available in our [web editor](/help/en/music-notation-software/), our [public viewer](https://blog.flat.io/showcase-and-share-your-compositions/) and [web embed](/help/en/music-notation-embed/).

## Sync a new recording

### 1. Link the recording

To start synchronizing an audio recording, open the score in our web editor, and click on the arrow next to the play button and choose **Add a recording** or **Manage recordings** and choose **Add a recording**.

![Play > Add a new recording](/help/assets/img/editor/recording-ddn-add.png)

Then **enter the link (URL) of your recording**. This link can be a YouTube or Vimeo video, or an audio track hosted on SoundCloud.

![Paste the recording link](/help/assets/img/editor/recording-link-add.png)

### 2. Adjust the beginning of the track

Once the recording has been linked to your score, we advise you to start by **adjusting the beginning and the end of the track**. These two synchronization points are automatically added and correspond to the beginning of the first measure and the end of the last measure.

![Adjusting the beginning of the track](/help/assets/img/editor/tracks-start-edit.gif)

**Tip**: When editing an existing sync point and the audio track is playing, its timing will be automatically updated. You just need to click on "Save" to use the current timing for the sync point and save it (example above).

### 3. Add extra synchronization points

Between two points (e.g. the beginning and end of the score), we use our playback algorithm and the duration between these points to automatically determine how we will move the "slider" on the score.

However since the interpretation is likely not linear, you will need to add extra synchronization points. You don't need to add points at every measure, only to improve the sync between the sound and the notation.

Click on "**Add a new synchronization point**" and update the measure number and/or timing. An easy way to add these points is to play the audio while reading the notation. When the beginning of a measure is not synced with the interpretation, click on the button to add a new point, the adjust the measure number (see example below).

![Add a new point](/help/assets/img/editor/tracks-add-point.gif)

**Tip**: You can to temporary display the measures numbers for all the measures [in the layout options](/help/en/music-notation-software/layout.html), this makes easier to edit the synchronization points.

### Choose which audio source to play

You can toggle between the tracks and the playback to choose the source to play when you use the player controls. Click on the arrow next to the play button, and choose the audio source you want to play:

![Toggle between tracks](/help/assets/img/editor/tracks-toggle.png)

### Deleting a recording and Changing default audio source

You can delete synchronized recordings and change the default audio source in the document settings: click on the arrow next to the playback, and choose "**Manage recordings**".

From this settings page, you can delete recordings, change the default source played when you open the score and add extra recordings.

![Manage tracks](/help/assets/img/editor/tracks-manage.png)
