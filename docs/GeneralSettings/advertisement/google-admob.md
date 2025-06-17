---
sidebar_position: 3
pagination_next: null
pagination_prev: null
---

# Setting Up Google AdMob in Your App

This documentation provides a comprehensive guide on how to integrate Google AdMob into your mobile application. Follow these step-by-step instructions to set up your Google Ads account, register your app with AdMob, and implement various ad formats.

## 1. Creating a Google Ads Account

Before you can use AdMob in your application, you need to create a Google Ads account.

1. Go to the [Google AdMob Console](https://apps.admob.com)
2. Sign in with your Google account or create a new one if you don't have one
3. Follow the onboarding process to create your AdMob publisher account:
   - Enter your account information (name, country, time zone)
   - Accept the AdMob terms and conditions
   - Set up your payment profile (required to receive ad revenue)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nIBvbUTSJa8?si=M01V_kFb9BBjWqPa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 2. Adding Your App to Google AdMob

Once your account is set up, you need to register your application with AdMob.

### For Android App:

1. In the [AdMob console](https://apps.admob.com), click on "Apps" in the sidebar
2. Click on "Add App" button
3. Select "Android" as the platform
4. Choose whether your app is already published on Google Play Store
   - If published: Search and select your app
   - If not published: Enter your app name manually
5. Enable user metrics if you want detailed analytics (recommended)
6. Click "ADD APP" to register your Android application

![Android App Setup Process](/img/googleads/googleads1.gif)

### For iOS App:

1. In the [AdMob console](https://apps.admob.com), click on "Apps" in the sidebar
2. Click on "Add App" button
3. Select "iOS" as the platform
4. Choose whether your app is already published on App Store
   - If published: Search and select your app
   - If not published: Enter your app name manually
5. Enable user metrics if you want detailed analytics (recommended)
6. Click "ADD APP" to register your iOS application

![iOS App Setup Process](/img/googleads/googleads2.gif)

## 2.1 App Validation & app-ads.txt Setup

Proper validation and `app-ads.txt` configuration ensure your app is authorized to serve ads and earn revenue.

### App Validation

#### For Published Apps

If your app is already live on the **Google Play Store** or **Apple App Store**:

- AdMob will **automatically validate your app** once the SDK is integrated and users start using the app.
- No manual steps are needed.
- You can monitor the validation status in the [AdMob Console](https://apps.admob.com) under "Apps" > "App settings".

> **Tip:** Make sure the app includes the correct App ID and Ad Unit IDs in the SDK initialization code.

---

#### For Unpublished Apps

If your app is **not yet published**, you must trigger validation manually:

1. **Complete SDK Integration:**

   - Follow the integration steps for Android (using `AndroidManifest.xml`) or iOS (using `Info.plist`) as shown in Section 4.

2. **Use a Real Device:**

   - Install your app (debug or release) on a real physical device (not an emulator).
   - Launch the app and keep it open for a few seconds.

3. **Wait for Validation:**

   - Google will detect that your app has initialized the AdMob SDK.
   - App status in the AdMob dashboard should change from **"Not yet validated"** to **"Ready to serve ads"** within a few hours.

4. **Verify in Console:**
   - In the [AdMob Console](https://apps.admob.com), check your app status under "Apps".
   - If validation is successful, you'll see a message like **"SDK detected"**.

> **Important:** Use **test ads** during validation to avoid any policy violations.

---

### Configuring `app-ads.txt` for Authorized Sellers

To prevent unauthorized ad inventory sales and improve ad revenue, configure the `app-ads.txt` file.

#### Step-by-Step Instructions

1. **Generate Your File:**

   - Go to [AdMob Console > Apps > App Settings](https://apps.admob.com)
   - Click **"Download app-ads.txt"**
   - It will look something like:
     ```
     google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
     ```

2. **Host the File on Your Website:**
   - Upload the `app-ads.txt` file to the **root directory** of your developer website (e.g.):
     ```
     https://yourdomain.com/app-ads.txt
     ```

---

### Linking Your Website in App Stores

#### Google Play Console

1. Go to **Google Play Console > All apps > Your App > Store Presence > Store Settings**
2. In **"Developer Website"**, add the full domain:

   ```
   https://yourdomain.com
   ```

3. Save and publish the changes.

#### Apple App Store Connect

1. Go to **App Store Connect > Your App > App Information**
2. In **Marketing URL**, enter:

   ```
   https://yourdomain.com
   ```

3. Save and submit for review.

---

### Validate Your `app-ads.txt` File

After publishing:

- Go back to AdMob Console > **"App settings"**
- Under **"App-ads.txt status"**, ensure it shows as **"Authorized"**
- If not, double-check:
- The file is accessible: `https://yourdomain.com/app-ads.txt`
- The domain matches the one in Play Store / App Store

> **Note:** Validation can take up to 24–48 hours to reflect in the console.

---

## 3. Finding Your App IDs

After registering your apps, you need to obtain the App IDs for both platforms.

### Android App ID

1. In the AdMob console, go to "Apps" and select your Android app
2. In the App settings page, look for the "App ID" field
3. This ID starts with "ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"
4. Copy this ID for later use in your app integration

![Android App ID](/img/googleads/googleads3.gif)

### iOS App ID

1. In the AdMob console, go to "Apps" and select your iOS app
2. In the App settings page, look for the "App ID" field
3. This ID starts with "ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"
4. Copy this ID for later use in your app integration

![iOS App ID](/img/googleads/googleads4.gif)

## 4. Implementing AdMob in Your App

### For Android Integration:

1. Open your project's `android/app/src/main/AndroidManifest.xml` file
2. Find the `<meta-data>` tag inside the `<application>` tag, as shown in the example below.

```xml
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY" />
```

3. Replace "ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY" with your actual Android App ID

![Android App ID](/img/googleads/googleads5.png)

### For iOS Integration:

1. Open your project's `ios/Runner/Info.plist` file
2. Find the `<key>GADApplicationIdentifier</key>` tag inside the `<dict>` tag, as shown in the example below.

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY</string>
```

3. Replace "ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY" with your actual iOS App ID

![iOS App ID](/img/googleads/googleads6.png)

## 5. Creating Ad Unit IDs

Now you need to create different types of ad units for your application.

### Banner Ad Unit ID

1. In the AdMob console, select your app
2. Click on "Ad units" tab
3. Click "CREATE AD UNIT" button
4. Select "Banner" as the ad format
5. Enter a name for your banner ad unit (e.g., "Main Banner Ad")
6. Click "CREATE AD UNIT"
7. Copy the generated Ad unit ID that starts with "ca-app-pub-"

#### Android Banner Ad Unit ID

![Banner Ad Unit ID](/img/googleads/googleads7.gif)

#### iOS Banner Ad Unit ID

![Banner Ad Unit ID](/img/googleads/googleads8.gif)

### Interstitial Ad Unit ID

1. In the AdMob console, select your app
2. Click on "Ad units" tab
3. Click "CREATE AD UNIT" button
4. Select "Interstitial" as the ad format
5. Enter a name for your interstitial ad unit (e.g., "Level Complete Ad")
6. Click "CREATE AD UNIT"
7. Copy the generated Ad unit ID that starts with "ca-app-pub-"

#### Android Interstitial Ad Unit ID

![Interstitial Ad Unit ID](/img/googleads/googleads9.gif)

#### iOS Interstitial Ad Unit ID

![Interstitial Ad Unit ID](/img/googleads/googleads10.gif)

### Rewarded Ad Unit ID

1. In the AdMob console, select your app
2. Click on "Ad units" tab
3. Click "CREATE AD UNIT" button
4. Select "Rewarded" as the ad format
5. Enter a name for your rewarded ad unit (e.g., "Reward Video Ad")
6. Complete the reward settings for this ad unit:
   - **Reward amount**: Enter the number of reward items the user will receive (must be a whole number)
   - **Reward item**: Enter the name of reward item the user will receive (e.g., Coins, extra lives)
   - You can check the option to override rewarded settings provided by third-party ad networks
7. (Optional) Configure advanced settings if needed:
   - Ad type selection
   - Server-side verification
   - Frequency capping
   - eCPM floor settings
8. Click "CREATE AD UNIT"
9. Copy the generated Ad unit ID that starts with "ca-app-pub-"

#### Android Rewarded Ad Unit ID

![Rewarded Ad Unit ID](/img/googleads/googleads11.gif)

#### iOS Rewarded Ad Unit ID

![Rewarded Ad Unit ID](/img/googleads/googleads12.gif)

### Native Ad Unit ID

1. In the AdMob console, select your app
2. Click on "Ad units" tab
3. Click "CREATE AD UNIT" button
4. Select "Native" as the ad format
5. Enter a name for your native ad unit (e.g., "Home Screen Native Ad")
6. (Optional) Complete the advanced settings for this ad unit:
   - **Media type**: Choose the native media type you want to allow
     - Image: Only image ads will be shown
     - Video: Only video ads will be shown (requires MediaView to render)
   - **eCPM floor settings**: Set minimum eCPM values if desired
     - Google optimized: Let Google dynamically set floors based on various factors
     - Manual floor: Set your own minimum eCPM values
     - Disabled: No eCPM floor on this ad unit
   - **Country-specific floors**: Optional settings for specific regions
7. Click "CREATE AD UNIT"
8. Copy the generated Ad unit ID that starts with "ca-app-pub-"

#### Android Native Ad Unit ID

![Native Ad Unit ID](/img/googleads/googleads13.gif)

#### iOS Native Ad Unit ID

![Native Ad Unit ID](/img/googleads/googleads14.gif)

## 6. Configuring Ad Units in Your App's Admin Panel

After creating all necessary ad units, you need to configure them in your app's admin panel:

1. Log in to your app's admin panel
2. Locate the AdMob section
3. Enter your Ad Unit IDs in the corresponding fields:
   - Banner Ad Unit ID
   - Interstitial Ad Unit ID
   - Rewarded Ad Unit ID
   - Native Ad Unit ID
4. Save the changes

## 7. Troubleshooting Common Issues

### No Ads Appearing

If ads aren't showing in your app:

1. Check that you've correctly implemented the Ad Unit IDs
2. Verify that you've added the correct App ID in AndroidManifest.xml or Info.plist
3. Ensure your device has an active internet connection
4. Make sure you're not using an ad blocker

📚 For more detailed information, refer to the [Official AdMob Documentation](https://developers.google.com/admob).
