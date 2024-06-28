chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text) {
      analyzeText(request.text);
    }
  });
  
  function analyzeText(text) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Analyzing...</p>'; // Show a loading message
  
    // Send a message to the background script to perform the fetch request
    chrome.runtime.sendMessage({ action: "analyzeText", text: text }, (response) => {
      if (response.error) {
        resultDiv.innerHTML = `<p>Error: ${response.error}</p>`;
      } else {
        resultDiv.innerHTML = `
          <p><strong>Text:</strong> ${text}</p>
          <p><strong>Polarity:</strong> ${response.polarity}</p>
          <p><strong>Subjectivity:</strong> ${response.subjectivity}</p>
        `;
      }
    });
  }
  