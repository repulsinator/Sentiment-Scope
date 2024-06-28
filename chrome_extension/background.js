chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "analyseText",
    title: "Analyse",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "analyseText") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: sendSelectedTextToPopup,
      args: [info.selectionText]
    });
  }
});

function sendSelectedTextToPopup(selectedText) {
  chrome.runtime.sendMessage({ text: selectedText });
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeText") {
    analyzeText(request.text, sendResponse);
    return true; 
  }
});

function analyzeText(text, sendResponse) {
  fetch('https://sentiment-scope.onrender.com/sentiment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
  })
  .then(response => response.json())
  .then(data => {
    sendResponse(data);
  })
  .catch(error => {
    sendResponse({ error: error.message });
  });
}
