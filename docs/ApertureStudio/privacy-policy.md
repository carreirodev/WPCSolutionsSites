# Privacy Policy — Aperture Studio AI

**Last updated:** July 7, 2026
**Application:** Aperture Studio AI
**Platform:** Windows 10 / 11 (x64)
**Publisher:** WPC Solutions

> **Publisher note (not part of the policy):** review this draft, confirm the contact address,
> then **publish it at a stable public HTTPS URL** (your site, GitHub Pages, or another host you
> control) and enter that URL in Partner Center. The Microsoft Store requires a working privacy
> policy URL because this app offers optional online features. Remove this quoted note before
> publishing.

---

## 1. Introduction

This Privacy Policy explains how **Aperture Studio AI** ("the app", "we", "us") handles
information when you use it on Windows.

Aperture Studio AI is a professional photo and video organization application. It is designed to
work **locally on your computer**. By default it does not require an account, does not send your
photos or personal data to our servers, and stores everything in a catalog on your own device.

Some features are **optional and cloud-based** (for example, cloud AI keywording and Google
Photos import). Those features only run when you explicitly enable and use them, and they are
described in Section 5.

By installing or using the app, you agree to this policy.

---

## 2. Summary

- We **do not** collect your name, email, location, or other personal data on our servers.
- We **do not** use analytics, telemetry, or usage tracking.
- We **do not** require an account or sign-in to use the app.
- Your catalog, thumbnails, edits, and settings are stored **locally on your device**.
- Your original photos and videos are **never copied or modified** by organizing them; the app is a non-destructive overlay on your existing files.
- **Optional** cloud features (cloud AI keywording, Google Photos) send data to third-party providers **only when you turn them on**, using **your own** accounts or API keys.
- We **do not** receive your payment details; purchases are handled by the Microsoft Store.

---

## 3. Data stored locally

To do its job, the app stores information on your computer, inside a self-contained catalog
folder (a `.aperture` catalog, containing a local SQLite database, thumbnail and preview caches,
and a settings file). This local data can include:

- References (relative paths and content hashes) to the photo and video files you add — **the app does not copy your originals into the catalog**.
- Thumbnails and preview images generated from your media.
- Metadata read from your files (EXIF, IPTC, XMP), such as camera model, lens, capture date, and any GPS coordinates already embedded in your photos.
- Organization you create: albums, smart albums, keywords, ratings, color labels, and non-destructive edit instructions (crop, rotation, etc.).
- Application preferences and, if you provide them, credentials for optional cloud services (see Section 7).

This information **stays on your device** and is **not transmitted to us**.

---

## 4. Data we do not collect

The app does **not** collect, store on our servers, or transmit to us:

- Your name, email, phone number, or address.
- Your IP address, geographic location, or advertising identifiers.
- The contents of your photos, videos, or catalog (except through the optional cloud features you choose to enable — see Section 5).
- Automatic diagnostic or telemetry data.
- Payment or banking information (purchases are processed by the Microsoft Store).

We operate **no user accounts** and keep **no server-side profile** associated with you.

---

## 5. Optional cloud features (off by default, user-initiated)

The following features are **disabled until you choose to use them**. When you enable them, data
leaves your device **to the third party you select**, under that third party's terms — not to us.

### 5.1 Cloud AI keywording

Instead of (or in addition to) the on-device AI, you can choose to send images to a cloud vision
provider to generate keyword suggestions:

- **Google Cloud Vision** and/or **Amazon Rekognition (AWS)**.
- You supply **your own API credentials**. When you run cloud keywording, the selected images (or
  data derived from them) are sent to that provider for analysis and the results are returned to
  the app.
- This processing is governed by the provider's privacy policy and terms:
  - Google Cloud: https://cloud.google.com/terms/cloud-privacy-notice
  - AWS: https://aws.amazon.com/privacy/
- We do not receive these images or results; the exchange is between your app installation and the
  provider you configured.

### 5.2 Google Photos import

If you connect Google Photos, the app uses Google's **OAuth 2.0 (PKCE)** sign-in so it can read
media from **your own** Google account with your consent. The app never sees your Google password
— authentication happens through Google and returns a token stored locally on your device. This
access is governed by Google's Privacy Policy: https://policies.google.com/privacy. You can revoke
access at any time from your Google Account's security settings.

### 5.3 On-device AI (not a cloud feature)

The app's default AI keywording, semantic search, and face detection run **locally** using models
on your machine. Images processed by the local AI **do not leave your device**.

---

## 6. Media tools downloaded at runtime

The app relies on two well-known open-source tools — **ExifTool** (metadata) and **FFmpeg**
(HEIC/video decoding). These are **not bundled** in the package. The first time they are needed,
the app downloads them from their official distribution sources into your per-user application
data folder and runs them locally from there. This download requires an internet connection but
transmits no personal data about you.

---

## 7. Credentials and security

- Any API keys or tokens you enter for optional cloud services are stored **locally** using the
  operating system's protected storage (Windows Data Protection API / DPAPI). They are **not**
  transmitted to us.
- We follow the principle of least data: the app requests only the access it needs and only for
  the folders and accounts you explicitly provide.
- Because your catalog and settings live on your device, we recommend keeping Windows updated and
  protecting access to your user account.

---

## 8. Location data

Some photos contain GPS coordinates in their metadata. The app can read and display this
information **locally** (for example, to show where a photo was taken). This location data stays
on your device unless you choose to use a cloud feature that would transmit the image, or you
explicitly export or write metadata to a file. We do not collect your device's real-time location.

---

## 9. Third-party services

### Microsoft WebView2
The app's interface is rendered using **Microsoft WebView2**. WebView2 is provided by Microsoft
and subject to Microsoft's privacy practices: https://privacy.microsoft.com/

### Microsoft Store
If you installed the app from the Microsoft Store, Microsoft handles distribution, installation,
updates, and any **purchase** transaction under Microsoft's privacy policy. We do **not** receive
your payment data (such as card or bank details). Microsoft may share with us only the limited
information needed for the commercial transaction (such as purchase confirmation and region),
according to Store policy.

### Cloud AI providers and Google
Only relevant if you enable the optional features in Section 5. Those exchanges are governed by
the respective provider's privacy policy, linked above.

---

## 10. Internet connection

The app's **core features work offline** after installation. An internet connection is used only
for: the one-time download of the media tools (Section 6); optional cloud features you enable
(Section 5); and Store-provided installation and updates.

---

## 11. Children

Aperture Studio AI is a professional productivity tool. It is not directed at children under 13
and does not knowingly collect personal data from children.

---

## 12. Your choices and control

You are always in control of your data:

- **Disable cloud features** at any time in Settings; the app returns to fully local operation.
- **Remove folders** from the catalog, or **delete the entire catalog**, from within the app or by
  deleting the `.aperture` folder.
- **Revoke Google Photos access** from your Google Account settings.
- **Remove stored API keys** in the app's settings.
- **Uninstall** the app from Windows Settings at any time.

---

## 13. Changes to this policy

We may update this Privacy Policy to reflect changes in the app or legal requirements. When we do,
we will change the "Last updated" date at the top. We recommend reviewing this policy occasionally.

---

## 14. Contact

If you have questions about this Privacy Policy, contact us:

**Email:** contact@wpcsolutions.com.br
**Support:** the app's page on the Microsoft Store

---

_Aperture Studio AI is a product of WPC Solutions._
