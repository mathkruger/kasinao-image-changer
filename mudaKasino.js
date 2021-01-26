var mudaKasino = document.getElementById('kasino');

chrome.storage.sync.get('kasino', function (data) {
    mudaKasino.checked = data.kasino;
});

mudaKasino.onchange = function (element) {
    let value = this.checked;

    chrome.storage.sync.set({ 'kasino': value }, function () {
        console.log('The value is ' + value);
    });

    if (value) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "init", hide: value }, function (response) {
                console.log(response.result);
            });
        });
    }
    else {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "remove", hide: value }, function (response) {
                console.log(response.result);
            });
        });
    }
};