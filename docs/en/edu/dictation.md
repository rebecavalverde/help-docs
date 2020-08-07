---
title: Create music dictation activities
description: Discover how to create dictation activities with some powerful features available in Flat for Education
nav: edu
pid: dictation
permalink: en/education/dictation.html
---

Musical dictation is one of the most important exercises for ear training. It helps students to develop the ability to identify sounds and the sense of rhythm. In this tutorial you will the discover how you can easily create your custom dictation activities using [Flat for Education](https://flat.io/edu) music notation editor.

We will use the following features in this tutorial:

- [Music notation editor](/help/en/music-notation-software/)
- [Upload and sync an MP3 file with a score](/help/en/music-notation-software/synchronize-external-recording.html)
- [Assignments templates with template lock](help/en/education/templates.html)
- Playback limitation
- [Custom toolset](/help/en/education/toolset.html)

There are two main ways to create a dictation with Flat for Education:

- **Using an actual performance recording**, you can discover this in our [first example below (melodic dictation)](#melodic-dictation-example);
- Creating the full score using Flat for Education, then **using the playback sound of the complete score** in your assignment template. [Second example below (Rhythmic dictation)](#rhythmic-dictation-example).

## Melodic dictation example

### 1. Create the template

In this example, the students will complete the last 5 measures from an existing score (Bach Cello Suite No. 1 in G Major, Prélude) and we will use a recording of the piece we have as MP3 file.

We start [by creating a new score with one instrument (Cello)](/help/en/music-notation-software/create-your-first-music-score.html), write the beginning of the measures to complete, [add the extra empty measures to complete](/help/en/music-notation-software/addmeasure.html), and [some inline instrutions using annotations](/help/en/music-notation-software/annotation.html). We now the following score:

![Example template score](/help/assets/img/edu/dictation-score-bach.png)

### 2. Link the audio recording

We can now add the audio recording to the score to complete. **Next to the play button**, click on the arrow and choose **Add recording**:

![Play > Add a new recording](/help/assets/img/editor/recording-ddn-add.png)

Then **choose the audio file to upload**:

![Paste the recording link](/help/assets/img/editor/recording-link-add.png)

Once the file is uploaded, you can adjust the beginning and the end of audio track to match the played measures. You can also add additional sync points, [check out our dedicated article to learn more](/help/en/music-notation-software/synchronize-external-recording.html).

![Adjust the beginning and end of the audio](/help/assets/img/edu/dictation-score-bach-sync.png)

### 3. Create the assignment

Now that your score is ready to use for the assignment, you can click on "[**New assignment**](/help/en/education/assignments-activities.html)" next to the title in the editor, and choose "**Template**".

![New assignment](/help/assets/img/edu/dictation-score-bach-new-assignment.png)

We will focus on the following options available in the assignment creation page:

![Assignment options](/help/assets/img/edu/dictation-lock-play-limit.png)

* **Lock template**: Students will not be able to change the notes you inserted in your original template
* **Playback limit**: We choose "10" here, so students will only be able to click on "Play" 10 times to listen to the audio track.

### 4. Student view

When a student [will open the assignment](http://127.0.0.1:4000/help/en/education/student-view.html#work-on-an-assignment), they will have the play limit display, and the original locked notes displayed in dark blue:

![Limit score](/help/assets/img/edu/dictation-score-bach-play-limit.png)

## Rhythmic dictation example

In this second example, we will create a rhythmic dictation example from zero, and use the generated MP3 from the editor playback to create an assignment template.

### 1. Create the completed score and audio

We start [by creating a new score with one percussion part (Claves)](/help/en/music-notation-software/create-your-first-music-score.html), and write the measures for our short activity:

![Complete example](/help/assets/img/edu/dictation-score-rhythmic-full.png)

Once the completed template is done, we export the audio as a MP3 file:

![Export file as MP3](/help/assets/img/edu/dictation-score-rhythmic-export-mp3.png)

### 2. Remove the beats to complete

In our Scores library, we make a copy of the completed score to create the empty version for our assignment:

![Copy and rename](/help/assets/img/edu/dictation-score-rhythmic-rename.gif)

On this score that will use for our assignment template, we now remove the beats that our students will complete:

![Score to complete](/help/assets/img/edu/dictation-score-rhythmic-tocomplete.png)

### 3. Link the audio recording

We can now add the audio recording to the score to complete. **Next to the play button**, click on the arrow and choose **Add recording**:

![Play > Add a new recording](/help/assets/img/editor/recording-ddn-add.png)

Then **upload the audio file we previously generated**:

![Paste the recording link](/help/assets/img/editor/recording-link-add.png)

In this example, the audio will have the perfect duration, so we can directly save the track.

### 4. Create the assignment

Now that your score is ready to use for the assignment, you can click on "[**New assignment**](/help/en/education/assignments-activities.html)" next to the title in the editor, and choose "**Template**".

![New assignment](/help/assets/img/edu/dictation-score-bach-new-assignment.png)

We will focus on the following options available in the assignment creation page:

![Assignment options](/help/assets/img/edu/dictation-lock-play-limit-toolset.png)

* **Lock template**: Students will not be able to change the notes you inserted in your original template
* **Playback limit**: We choose "6" here, so students will only be able to click on "Play" 6 times to listen to the audio track.
* **Custom toolset**: We create a new toolset for our rhythmic dictation exercise with some of the tools available in the main toolbar (undo, copy paste) and some of the tools from the note toolbar (add note, change duration to up a sixteenth note, and dots). Once saved, you can re-use this toolset for other assignments.

![Assignment options](/help/assets/img/edu/dictation-score-rhythmic-toolset.png)

### 4. Student view

When a student [will open the assignment](http://127.0.0.1:4000/help/en/education/student-view.html#work-on-an-assignment), they will have the play limit display, and the only the tools they need for the activity.

![](/help/assets/img/edu/dictation-score-rhythmic-student.png)