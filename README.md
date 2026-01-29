# Tabs Exporter

A lightweight Chrome extension that exports all your browser windows and tabs to a plain text file. Perfect for backing up your session, sharing your open tabs, or keeping a record of your browsing for later reference. Includes a minimal glassmorphism popup and custom toolbar icon.

---

## ✨ Features

- **Export all windows & tabs** — Captures every open window and every tab across your browser
- **Plain text output** — Exports to a readable `.txt` file with titles and URLs
- **Date-stamped files** — Downloads are named `tabs-YYYY-MM-DD.txt` for easy organization
- **One-click export** — Single button in the popup to generate and download your export
- **Manifest V3** — Built with the latest Chrome extension platform for security and performance
- **Minimal permissions** — Only requests access to tabs, windows, and downloads
- **Custom icons** — Includes extension icons for better visibility in the toolbar and Chrome UI

---

## 📦 Installation

### From Chrome Web Store (recommended)

1. Open the [Chrome Web Store](https://chrome.google.com/webstore) listing for **Tabs Exporter**
2. Click **Add to Chrome**
3. Confirm when prompted

### Load unpacked (development)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tab_window_exporter.git
   cd tab_window_exporter
   ```
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right)
4. Click **Load unpacked** and select the `tab_window_exporter` folder

---

## 🚀 Usage

1. Click the **Tabs Exporter** icon in your Chrome toolbar
2. In the popup, click **Export tabs**
3. A text file will be downloaded to your default Downloads folder

### Export format

The generated file looks like this:

```
Export generated on 1/28/2026, 10:30:00 AM

🪟 Window 1
 1. Example Page Title
    https://example.com
 2. Another Tab
    https://another-site.com

🪟 Window 2
 1. Third Window Tab
    https://third-site.com
```

Each window is listed with its tabs; each tab shows its **title** and **URL**.

---

## 🔐 Permissions

| Permission   | Purpose                                                |
|-------------|--------------------------------------------------------|
| `tabs`      | Read open tab titles and URLs                          |
| `windows`   | List all browser windows and their tabs                |
| `downloads` | Save the exported file to your Downloads folder        |

No data is sent to any server; everything runs locally in your browser.

---

## 📁 Project Structure

```
tab_window_exporter/
├── manifest.json   # Extension manifest (Manifest V3)
├── popup.html      # Popup UI
├── popup.css       # Popup styles
├── popup.js        # Export logic
├── assets/         # Extension icons
│   ├── icon-48x48.png
│   └── icon-128x128.png
├── README.md
└── LICENSE
```

---

## 🛠 Development

- **Chrome version:** Requires a Chromium-based browser that supports Manifest V3 (e.g. Chrome 88+)
- **Testing:** Load the extension as “Load unpacked” and use the popup to test export behavior with multiple windows/tabs

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Carlos Garita Campos**

- GitHub: [@yourusername](https://github.com/yourusername)
- Chrome Web Store: [Tabs Exporter](https://chrome.google.com/webstore)

---

If you find this extension useful, consider giving it a ⭐ on GitHub or a review on the Chrome Web Store.
