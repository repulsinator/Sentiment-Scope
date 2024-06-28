// content.js
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.action === 'showResult') {
      console.log('Message received in content.js:', request);
      const { resultTitle, resultText } = request;
  
      // Prevent duplicate popups
      const existingPopup = document.getElementById('sentimentAnalysisPopup');
      if (existingPopup) {
        document.body.removeChild(existingPopup);
      }
  
      const popup = document.createElement('div');
      popup.id = 'sentimentAnalysisPopup';
      popup.style.position = 'fixed';
      popup.style.top = '20%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.zIndex = '9999';
      popup.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      popup.style.padding = '20px';
      popup.style.borderRadius = '10px';
      popup.style.maxWidth = '80%';
      popup.style.textAlign = 'center';
      popup.style.fontFamily = 'Arial, sans-serif';
      popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Added shadow for better visibility
  
      const closeButton = document.createElement('button');
      closeButton.innerText = 'X';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '5px';
      closeButton.style.right = '10px';
      closeButton.style.background = 'none';
      closeButton.style.border = 'none';
      closeButton.style.fontSize = '20px';
      closeButton.style.cursor = 'pointer';
      closeButton.onclick = function() {
        document.body.removeChild(popup);
      };
      popup.appendChild(closeButton);
  
      const title = document.createElement('h3');
      title.innerText = resultTitle;
      title.style.marginBottom = '10px';
      popup.appendChild(title);
  
      const result = document.createElement('p');
      result.innerText = resultText;
      popup.appendChild(result);
  
      document.body.appendChild(popup);
  
      setTimeout(function () {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 10000);
  
      // Corrected: Only one sendResponse call per message
      sendResponse({ success: true });
      return true; // Indicates async response
    }
    // Removed the duplicate sendResponse call
  });