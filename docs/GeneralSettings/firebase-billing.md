---
title: Firebase Billing
description: Enable Firebase Billing for OTP Login, Maps and Places API
sidebar_position: 6
---

# Enable Firebase Billing


## 🔼 Overview
Firebase provides a range of services, some of which require billing to be enabled, especially OTP login, Google Maps, and Places API. Follow these steps to ensure proper billing setup.

## 🔼 Upgrade from the Firebase Spark Plan to the Blaze Plan
:::note
Regarding Firebase OTP setup — if you've already set up Blaze plan for Firebase OTP previously, there's no need to repeat steps 1 to 3. <br />Please also ensure that your billing account is linked to your app project. If it isn't, kindly follow these steps (1 to 3 points).
:::

1. Log in to the [Firebase Console](https://console.firebase.google.com/u/0/). 
    - Open your project in the Firebase Console.
    - In the bottom left, you will see that your project is listed on the Spark plan. Click the upgrade button.
    - Click the upgrade button.

![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling1.webp)

2. Select the Blaze plan.
![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling2.webp)

3. Select a billing account. Then click Continue and Purchase. You are now on the Blaze plan.
    - For details on how to create a billing account, please see the Google Billing instructions:
    🔗[click here](https://docs.firerun.io/getting-started/upgrading-from-the-firebase-spark-plan-to-the-blaze-plan-tled)

    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling3.webp)
    - Select your country instead of India.
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling4.webp)
    - Select your existing payment profile, or click **'Create New Payment Profile'** if you don't have one.
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling5.webp)
    - Add details of payment account.
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling6.webp)
    - Select your existing payment method, or click 'Add Payment Method' if you don't have one.
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling7.webp)
    - Select your payment method.
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling8.webp)

## Setting Up Billing on Map and Place API Keys

## 1️⃣ Set Up Billing
:::note
Regarding Firebase OTP and Maps setup — if you've already set up billing for Firebase OTP previously, there's no need to repeat that step. Please ensure that your billing account is linked to your app project. If it isn't, kindly follow these steps (1 to 6 points).
:::

1. Go to the Firebase Console.
2. Select your project.
3. In the left-hand menu, click on **Project Settings**.
4. Under the **Billing** section, click **Go to Billing Account**.
5. If you don't have a billing account, **click Create Billing Account** and follow the prompts to add your payment method.
6. Link the billing account to your project.

## 2️⃣ Enable Required APIs
1. In the Firebase Console, go to **Project Settings > Cloud Messaging > Manage Service Accounts**.
2. Click on **Google Cloud Console**, then select your project.
3. In the Cloud Console, navigate to **APIs & Services > Library**.
4. Enable the following APIs:
    - **Maps SDK for Android** to display maps on Android devices
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling9.webp)
    - **Maps SDK for iOS** to display maps on iOS devices
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling10.webp)
    - **Geocoding API** for converting addresses into coordinates **(optional)**
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling11.webp)
    - **Places API** for location search and autocomplete
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling12.webp)
    - **Routes API** for calculating distance between locations   
    :::warning
    Distance Matrix API is now deprecated, so it's necessary to enable the Routes API.
    :::
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling13.webp)
    - **Maps JavaScript API** for displaying maps
    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling14.webp)

## 3️⃣ Set Up API Keys
1. In the Cloud Console, navigate to **APIs & Services > Credentials**.
![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling17.webp)
2. Click **Create Credentials** and select **API Key**.
![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling18.webp)

    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling19.webp)
3. API Key Management for **Android**, **iOS**, and **Place Services** (remove Restrictions from Android, iOS and Place Search API newly created), Please Ignore if Already **Unrestricted**.
![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling20.webp)

## 4️⃣ Add the API Key to Your App
1. In your Flutter app, locate the **AndroidManifest.xml** (for Android) or **AppDelegate.swift** (for iOS).
    - Insert your API key:
    ```
    <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_ANDROID_MAP_API_KEY" />
    ```

    - `android/app/src/main/AndroidManifest.xml`

    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling15.webp)

2. For iOS, add the key in **AppDelegate.swift**:   
    ```
    GMSServices.provideAPIKey("YOUR_IOS_MAP_API_KEY")
    ```

    - `ios/Runner/AppDelegate.swift`

    ![firebaseBilling](../../static/img/firebaseBilling/firebaseBilling16.webp)

## 5️⃣ Verify Billing Setup
1. In the Cloud Console, go to **Billing** and ensure the project is linked to your billing account.
2. Test OTP, Map, and Place APIs in your app to ensure they work properly.







