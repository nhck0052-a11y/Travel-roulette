# Travel Lottery Website Blueprint

## Overview

This document outlines the plan for creating a witty and visually appealing travel lottery website. The website will randomly select a travel destination from a list of 20 countries, with the selection process influenced by a weighted probability system based on the popularity of the destinations.

## Project Outline

### Style and Design

*   **Visuals:** Modern, clean, and playful design with engaging animations.
*   **Color Palette:** A vibrant and energetic color scheme, with harmonization based on the selected country.
*   **Typography:** Expressive fonts to create a clear visual hierarchy.
*   **Layout:** A responsive layout that works well on both desktop and mobile devices.
*   **Interactivity:** A "glow" effect on the main button to encourage user interaction.

### Features

*   **Random Destination Generator:** A button that, when clicked, randomly selects a travel destination.
*   **Weighted Probability:** The random selection will be based on a weighted system, where more popular destinations have a higher chance of being selected.
*   **Display Result:** The selected destination will be displayed to the user in a visually appealing way. This will include:
    *   A concise explanation of the country.
    *   Information on peak and off-peak seasons (by month).
    *   Harmonized colors based on the selected country.
*   **Multilingual Support (i18n):**
    *   Support for Korean (ko), English (en), Japanese (ja), and Chinese (zh).
    *   User-friendly language switching mechanism.
    *   Lightweight implementation to avoid excessive size.
*   **Google AdSense Integration:**
    *   Add Google AdSense script and meta tag to `index.html` for ad serving and account verification.

## Bug Fixes

*   **Flag Emoji Display on Windows Browsers:** Replace Unicode flag emojis with image-based flags (e.g., SVG/PNG) to ensure consistent display across all browsers and operating systems, particularly on Windows where emoji rendering can be inconsistent.

## Deployment

*   Deploy the static website to Firebase Hosting.

## Current Plan

1.  **`index.html`:** Create the HTML structure for the site, including a title, a button to start the lottery, a container to display the result, and UI elements for category selection. Also, integrate Google AdSense code within the `<head>` section.
2.  **`style.css`:** Implement the modern and playful design using CSS. This will include styling for the button, the result display, the category selection UI, and the overall layout.
3.  **`main.js`:** Write the JavaScript logic for the weighted random selection of a travel destination. This will also include fetching and displaying the country explanation, seasonal information, applying dynamic color styles, and handling category switching.
    *   Add the new "unpopular countries" data.
    *   Implement logic to switch between country categories.
4.  **`i18n.js` (New):** Create a new JavaScript file to manage translations and language switching logic.
    *   Add translations for the new "unpopular countries" and category selection UI.
5.  **Refactor for i18n:** Update `index.html` and `main.js` to use translation keys instead of hardcoded strings, and integrate the language switching UI.
6.  **Implement Flag Image Display:**
    *   Find a reliable source for flag images (e.g., `flagcdn.com`).
    *   Modify the `countries` array in `main.js` to store flag image URLs/paths instead of emoji characters.
    *   Update the `resultDiv.innerHTML` in `main.js` to display an `<img>` tag for the flag.
    *   Add necessary CSS to `style.css` to style the flag images.
7.  **Deploy to Firebase Hosting:**
    *   Initialize Firebase project (if not already done).
    *   Deploy static assets to Firebase Hosting.