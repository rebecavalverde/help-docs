---
title: Playback Troubleshooting
description: Find how to avoid issues with Flat's playback

nav: editor
pid: playback-troubleshooting
permalink: en/music-notation-software/playback-troubleshooting.html

---

## Web Audio API is stuck

This issue means that the timer of the Web Audio API, used to generate audio in the web browser, is stuck in time and since we rely on it to schedule our audio events, we cannot playback the score.

It is often an issue occurring at the operating system level, or because a third-party software is currently using the audio card used by the web browser.

If this issue happens to you, we recommend to :

1. First, just try to refresh your web page, or kill the iOS app and restart it.
2. If nothing changed, restart your computer or device.
3. Once restarted, only start your web browser with Flat (or Flat iOS app) and directly try to use the playback.
4. If the issue still happens and you are using a computer, try with a different web browser.
5. If it still happens with a different web browser, then try to contact us.

We hope it will allow you to fix this issue.
