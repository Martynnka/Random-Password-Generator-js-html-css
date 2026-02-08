# Password Generator (Scrimba Project)

Random password generator built while learning **JavaScript + HTML + CSS** on Scrimba.

Generates **two passwords at once** and displays them in two output boxes after clicking **Generate password**.

## Preview
- Dark UI inspired by the Scrimba/Figma design
- Outputs: 2 password rectangles
- Controls:
  - Password length slider (**6–15**)
  - Toggle **Numbers** and **Symbols**

## Features
- ✅ Generates **2 random passwords** on one click
- ✅ Password length controlled with a **range slider (6–15)**
- ✅ Character set is built dynamically:
  - Always includes **letters (A–Z, a–z)**
  - Optionally includes **numbers (0–9)** via checkbox
  - Optionally includes **symbols (~, !, @, #, …)** via checkbox
- ✅ Clean UI + container shadow
- ✅ Google Fonts: **Inter** + **Karla**

## Tech Stack
- HTML
- CSS
- JavaScript (DOM, events, `Math.random()`)

## How it works
- **`showpasswords()`** generates and renders both passwords:
  - Updates `#RandomPassword`
  - Updates `#RandomPassword1`

### Password generation logic
- **`getActiveCharacters()`** builds the allowed character list:
  - Starts from letters
  - Adds numbers if `#numbersCheck` is checked
  - Adds symbols if `#symbolsCheck` is checked
- **`RandomNumber()`** and **`RandomNumber1()`** generate passwords using:
  - `Math.floor(Math.random() * activeChars.length)`
  - Loop runs `passwordLength` times

### Length slider
- `#passwordRange` controls `passwordLength`
- `#lengthValue` shows current length live
- Slider fill is updated with `updateRangeFill()` using a linear-gradient background

## Run locally
https://jazzy-queijadas-a7595a.netlify.app/
