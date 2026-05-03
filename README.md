# Rock Paper Scissors (Console Edition)

A lightweight Rock–Paper–Scissors game that runs in the browser using prompts for input and the DevTools console for output.

## Key Features

- **Random computer opponent**: Generates `"rock"`, `"paper"`, or `"scissors"` at random.
- **Human input via prompt**: Accepts player choice using a browser `prompt()`.
- **Input validation with fallback**: Invalid entries default to `"rock"`.
- **Round-based gameplay**: Plays **5 rounds** per game.
- **Score tracking**: Tracks human vs. computer score across rounds.
- **Win/lose/draw results**: Logs round results and final game outcome to the console.

## Tech Stack

- **Languages**: HTML, JavaScript
- **Frameworks/Libraries**: None (vanilla JS)
- **Runtime**: Any modern web browser (Chrome, Edge, Firefox, etc.)

## Quick Start

### Option A: Run locally (recommended)

1. Clone or download this repository.
2. Open `rock-paper-scissors.html` in your browser.
3. Open DevTools:
   - Chrome/Edge: `F12` or `Ctrl+Shift+I`
4. Go to the **Console** tab.
5. Follow the `prompt()` dialog to enter your move (`rock`, `paper`, or `scissors`).

### Option B: Run with a simple local server (optional)

If you prefer serving the file over HTTP:

```bash
# from the project folder
python -m http.server 8000
```

Then open `http://localhost:8000/rock-paper-scissors.html` and use the console as described above.

## Project Structure

```
rock-paper-scissors/
├── rock-paper-scissors.html   # Minimal HTML page that loads the game script
└── rps.js                     # Game logic (input, rounds, scoring, output)
```

## How It Works (High Level)

- The game starts automatically when the page loads (`playGame()`).
- Each round:
  - The player is prompted to choose rock/paper/scissors.
  - The computer makes a random selection.
  - The result and updated score are printed to the console.

