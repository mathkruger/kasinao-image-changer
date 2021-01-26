chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ kasino: true }, function () {
    console.log("KASINÃO AEEEEE");
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});