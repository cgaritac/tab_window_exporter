document.getElementById("export").addEventListener("click", async () => {
    const windows = await chrome.windows.getAll({ populate: true });

    let content = `Export generated on ${new Date().toLocaleString()}\n\n`;

    windows.forEach((win, i) => {
        content += `🪟 Window ${i + 1}\n`;

        win.tabs.forEach((tab, j) => {
            content += ` ${j + 1}. ${tab.title}\n`;
            content += `    ${tab.url}\n`;
        });

        content += "\n";
    });

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
        url,
        filename: `tabs-${new Date().toISOString().split('T')[0]}.txt`,
        saveAs: false
    }, (_downloadId) => {
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
});