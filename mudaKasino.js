chrome.storage.sync.set({ 'kasino': value }, function () {
    console.log('The value is ' + value);
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: "init", hide: value }, function (response) {
        console.log(response);
    });
});