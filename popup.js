document.getElementById("export").addEventListener("Click", async () => {
    const windows = await chrome.windows.getAll({ populate: true });

    let content = `Export generated on ${new Date().toLocaleString()}\n\n`;

    windows.forEach((tab, i) => {
        content += `🪟 Window ${i + 1}\n`;
        
        windows.tabs.forEach((tab, j) => {
            content += ` ${j + 1}. ${tab.title}\n`;
            content += `    ${tab.url}\n`;
        });

        content += "\n";
    });

    const blob = new Blob([content], { type: "text/plain"});
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
        url,
        filename: `tabs-${Date.now()}.txt`
    });
})