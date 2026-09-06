# Typing Test Application

A professional typing test application with bilingual support (English & Hindi) that runs completely in your browser. Features real-time character-level feedback, comprehensive statistics, and a modern, responsive design.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Keyboard Controls](#keyboard-controls)
- [Configuration](#configuration)
- [Technical Details](#technical-details)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Typing Features

- **Live character-level feedback** - Wrong characters appear in red with highlighting
- **Word-level validation** - Complete words turn green (correct) or red (incorrect)
- **Multiple time options** - 5, 10, 15, and 30 minute tests
- **Real-time statistics** - WPM, accuracy, correct/wrong words update live
- **Automatic word advancement** - Space bar submits current word
- **Smart backspace** - Only works within the current word

### Bilingual Support

- **English typing** - Full English word list with common vocabulary
- **Hindi typing** - Devanagari script support with Hindi words
- **Easy language switching** - Toggle between EN and हिंदी

### Professional Features

- **Character-level error highlighting** - Precise feedback at exact error positions
- **Live timer** - Visual countdown with color coding
- **Comprehensive results** - Detailed summary after test completion
- **Responsive design** - Works on desktop, tablet, and mobile devices
- **Modern UI** - Dark theme with professional styling
- **No dependencies** - Pure HTML, CSS, and JavaScript

### Statistics Tracked

- **WPM (Words Per Minute)** - Calculated in real-time
- **Accuracy** - Percentage of correct words
- **Correct Words** - Total correctly typed words
- **Wrong Words** - Total incorrectly typed words
- **Time Taken** - Elapsed time during test
- **Total Errors** - Cumulative error count

## 🚀 Installation

### Option 1: Direct Download

1. Download the `index.html` file
2. Save it to your preferred location
3. Double-click to open in any web browser

### Option 2: Git Clone

```bash
git clone https://github.com/yourusername/typing-test.git
cd typing-test
```

# 📖 Usage

## Starting a Test

- **Select Language**: Click "EN" for English or "हिंदी" for Hindi
- **Choose Duration**: Select 5, 10, 15, or 30 minutes
- **Focus Typing Area**: Click anywhere in the typing area
- **Start Typing**: Timer starts automatically with first keystroke

## During the Test

- Type the highlighted word
- Press **Space** to submit and move to next word
- Use **Backspace** to correct mistakes in current word
- Watch real-time statistics update

## After Completion

- View detailed results automatically
- Check WPM, accuracy, time taken, and errors
- Click **Reset** to start a new test

---

## ⌨️ Keyboard Controls

| Key               | Action                                    |
| ----------------- | ----------------------------------------- |
| `Space`           | Submit current word                       |
| `Backspace`       | Delete last character (current word only) |
| `Tab`             | Refocus typing area                       |
| Any printable key | Type character                            |

---

## 🔧 Configuration

### Modifying Word Lists

Edit the `wordLists` object in the JavaScript section:

```javascript
const wordLists = {
  english: ["your", "custom", "words", "here"],
  hindi: ["आपके", "शब्द", "यहाँ"],
};
```
