---
sidebar_position: 11
title: Assets Management
pagination_next: null
pagination_prev: null
---

# Assets Management

## 📌 Understanding Assets in Flutter

Assets in Flutter include images, animations, and other resource files used within the app. Proper asset management ensures a seamless UI experience while maintaining performance.

## 🔄 Changing Asset Files

### 1️⃣ Images (SVG, PNG, JPG, etc.)

- To replace an existing image, **use the same name and extension** to avoid modifying the code.
- **Recommended:** Keep the new image size similar to the original for best performance.
- If changing the **name or format**, update its reference in the code.
- **For PNGs:** Some may be divided into multiple size variants (e.g., `2x`, `1.5x`).  
  - Replace all variants **or**  
  - Delete them and use a single image file instead.

### 2️⃣ Animations (Lottie, Rive, etc.)

- Flutter supports multiple animation formats like **Lottie (`.json`)**, **Rive (`.riv`)**, and others.
- You can replace an existing animation file using the **same filename** to avoid modifying code.
- If you replace our animation files with a different file, you'll have to find the usage of that file and change the widget accordingly.
- Editors for common formats:
  - **Lottie Editor:** [https://lottiefiles.com/editor](https://lottiefiles.com/editor)
  - **Rive Editor:** [https://rive.app/](https://rive.app/)

✅ **Final Check:** Always confirm that new or updated assets are correctly referenced in the code to avoid missing asset errors.
