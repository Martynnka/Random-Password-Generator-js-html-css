# Password Generator (Scrimba Project)

Simple random password generator built while learning **JavaScript + HTML + CSS** through Scrimba.

The app generates **two random passwords** at once and displays them in two rectangles after clicking the **Generate password** button.

## Features
- Generates **2 random passwords** on one click
- Uses a character set with:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Numbers (0–9)
  - Symbols (`~!@#$...`)
- Clean UI styled to match the Scrimba/Figma design
- Google Fonts included (**Inter** + **Karla**)

## Tech Stack
- HTML
- CSS
- JavaScript (DOM + Math.random)

## How it works
- `showpasswords()` runs two functions and updates the DOM:
  - `RandomNumber()` → updates `#RandomPassword`
  - `RandomNumber1()` → updates `#RandomPassword1`

Passwords are currently generated with length **9** characters.

## Run locally
Just open `index.html` in the browser.

