chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  console.log(changeInfo);
  if (changeInfo.status == "complete") {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["script.js"],
    });
  }
});
