---
sidebar_position: 4
pagination_next: null
pagination_prev: null
title: Flutter & Java JDK Setup

---

# Flutter & Java JDK Setup

Setting up your development environment correctly ensures a smooth experience while building Flutter applications. Follow these steps to install Flutter, configure Java JDK, set up your IDE, and initialize your project.

## 1️⃣ Install Flutter 🛠️

- Download the Flutter SDK from the official site: [Flutter SDK](https://flutter.dev/docs/get-started/install)
- Extract the ZIP file to a suitable location (e.g., `C:\flutter` on Windows or `~/flutter` on macOS/Linux).
- Add Flutter to your system path:
  - **Windows:** Add `C:\flutter\bin` to `System Environment Variables`.
  - **macOS/Linux:** Add `export PATH="$HOME/flutter/bin:\$PATH"` to `~/.zshrc` or `~/.bashrc`.
- Run the following command to verify installation:
  
  ```sh
  flutter doctor --verbose
  ```
- ✅ Ensure all dependencies are installed before proceeding.

---

## 2️⃣ Install Java JDK ☕

- Download the latest **Java Development Kit (JDK)** from [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html) or [OpenJDK](https://openjdk.org/).
- Install the JDK and note the installation path.
- Set up environment variables:
  
  - **Windows:**
    - Add `JAVA_HOME` as the JDK installation path in system variables.
    - Add `%JAVA_HOME%\bin` to the `Path` variable.
  - **macOS/Linux:**
    
    ```sh
    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/bin:$PATH
    ```
- Verify installation:

  ```sh
  java -version
  ```
- ✅ Ensure Java is installed correctly before proceeding.

---

## 3️⃣ Install IDE 🖥️

To develop Flutter applications efficiently, install an appropriate IDE:

- **Android Studio** (Recommended for full Android development tools)

  - Download from: [Android Studio](https://developer.android.com/studio)
  - Install Flutter & Dart plugins from **Preferences > Plugins**.

- **Visual Studio Code (VS Code)** (Lightweight & fast)

  - Download from: [VS Code](https://code.visualstudio.com/)
  - Install the Flutter and Dart extensions from the Extensions Marketplace.
  
✅ Choose the IDE that best fits your workflow and install the necessary plugins.

---

## 4️⃣ Basic Flutter Project Setup 📂

- Run the project on an emulator or connected device:
  
  ```sh
  flutter run
  ```
- Configure Android & iOS:
  - **Android:** Install Android Studio & necessary SDKs.
  - **iOS (macOS only):** Install Xcode & set up the iOS simulator.

---

✅ **Final Check:**

- Ensure Flutter, Java, and IDE are correctly installed by running:
  
  ```sh
  flutter doctor
  ```
- Resolve any missing dependencies.
- Test a simple Flutter app to confirm everything works as expected.
