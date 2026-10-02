# LinguaSwift — Language Translation Tool

A free, browser-based language translation tool with a modern UI. No installation or backend required — just open `index.html` in your browser!

## Features

- 🌍 **100+ languages** with auto-detection
- ⚡ **Free translation** via MyMemory API (no API key needed)
- 🔊 **Text-to-speech** for source and translated text
- 📋 **Copy to clipboard** with one click
- 🔄 **Swap languages** button
- 🌙 **Dark / Light mode** with system preference detection
- 📜 **Translation history** (last 50 translations, stored locally)
- ⌨ **Keyboard shortcut**: `Ctrl + Enter` (or `Cmd + Enter`) to translate
- 📱 **Responsive** — works on mobile and desktop

## How to Use

1. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
2. Type or paste your text in the **Source Text** panel.
3. Select the **source** and **target** languages (or leave source on "Detect Language").
4. Click **Translate** or press `Ctrl + Enter`.
5. Use the **copy** or **speaker** icons to copy or listen to either panel.

## API Details

This tool uses the **[MyMemory Translation API](https://mymemory.translated.net/)** — a free, public translation API.

| Limit | Free Tier |
|-------|-----------|
| Characters/day | 5,000 |
| API key required | No |
| Supported languages | 100+ |

> For higher usage, you can register a free account at https://mymemory.translated.net/doc/usagelimits.aspx to get 50,000 chars/day.

## Browser Requirements

- **Translation**: Any modern browser with `fetch()` support
- **Text-to-Speech**: Chrome / Edge (best support), Firefox, Safari
- **Clipboard copy**: Requires HTTPS or `localhost` for `navigator.clipboard`; falls back to `execCommand` otherwise

## File Structure

```
Language Translation Tool/
├── index.html   ← Main page (open this in your browser)
├── style.css    ← All styles
├── app.js       ← Application logic
└── README.md    ← This file
```
