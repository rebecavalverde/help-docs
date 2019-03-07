---
title: Setup & Configuration of Canvas
ptitle: Setup & Configuration of Canvas with Flat
description: Discover how to configure Flat in Canvas in 5 minutes, and more advanced configuration options to create accounts without PII and matching existing Flat accounts.
nav: edu
pid: canvas-setup
permalink: en/education/canvas-lms/setup-configuration.html
nexturl: en/education/canvas-lms/sso.html
nexttext: SSO with Canvas and Classes creation on Flat
---

*You will need a Flat for Education account to use this feature, [check out the introduction](/help/en/education/canvas-lms/).*

The configuration of [Flat for Education](https://flat.io/edu) in your Canvas courses can be done in a few seconds. You can either [use our default configuration settings](#default-configuration) or an [advanced configuration](#advanced-configuration) to choose custom privacy settings for example.

Whatever configuration you want to use in Canvas, you will need first to [get your LTI credentials in your Flat account (Settings > Integrations > Canvas)](https://flat.io/settings/lti/canvas). These credentials will allow Canvas to sign in your users on Flat and access resources and assignments, so keep them private at all times.

If your students already have Flat accounts, [check out our tips below to automatically match existing Flat accounts when using Canvas](#matching-existing-flat-accounts).

![Integrations list](/help/assets/img/edu/canvas-integrations-list.png)

### Default configuration

Once you got [your LTI Credentials from your Flat for Education account (Consumer Key and Shared Secret)](https://flat.io/settings/lti/canvas):

1. **Open a course** and choose **Settings** on the navigation;
2. Go in the **Apps** tab, Search **"Flat"**.
3. Click **Add App** and enter your [**Consumer Key and Shared Secret**](https://flat.io/settings/lti/canvas).

Your integration is now ready to use! You and your students can now access Flat from Canvas, and you can post content and Flat activities in your Canvas course. [Discover the possibilities below](#sso-with-canvas-single-sign-in).

![Setup preview](https://demo.flat.io/img/help/edu_canvas_setup.gif)

### Advanced configuration

Using an advanced and manual configuration will allow you to customize the app settings on Canvas and change the privacy settings. For example, you will be able change the Canvas privacy settings to use Flat without any PII (Personally identifiable information).

Once you got [your LTI Credentials from your Flat for Education account (Consumer Key and Shared Secret)](https://flat.io/settings/lti/canvas):

1. **Open a course** and choose **Settings** on the navigation;
2. Go in the **Apps** tab, and click to **View Apps Configuration**.
3. Click to **+App** to add Flat and in "**Configuration Type**" choose "**By URL**".
4. Enter the following settings then click on **Submit**.
  * *Name*: Flat
  * *Consumer Key and Secret Key*: [your credentials](https://flat.io/settings/lti/canvas).
  * *Config URL*: ```https://flat.io/lti/cartridge.xml```

![Add advanced configuration](/help/assets/img/edu/canvas-advanced-app-add.png)

Once your configuration has been saved, you can change your configuration settings by clicking on **Edit** next to the added app:

![Edit advanced configuration (dropdown)](/help/assets/img/edu/canvas-advanced-app-edit-ddn.png)

From this page, **you can adjust the name, description and privacy** of the added app. If you want to use Flat without any personal information, you can choose **Anonymous**. Canvas will only send an opaque user identifier that only allow us to match the anonymous account between sessions.

![Anonymouse accounts](/help/assets/img/edu/canvas-advanced-privacy-anonymous.png)

### Matching existing Flat accounts

If **your students already used Flat without Canvas before**, you might want to re-use their accounts while using Flat with Canvas. We automatically match accounts based on their email addresses, so make sure that:

* They have **the same email address between their Flat account and Canvas account**.
* They have **Education accounts on Flat in your school account, not individual accounts**. For security reasons, we will only match the accounts part of your school accounts.
* You **use the default Privacy settings**, so Canvas will provide the email address when they open Flat from Flat.

If we can't find an existing matching account, we will automatically create a new one. You might want to try the matching with one student account before all your students sign in. If you need any help to match existing accounts, [please contact our team](/help/support).
