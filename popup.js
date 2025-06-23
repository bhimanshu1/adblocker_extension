// popup.js
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('refreshBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});
