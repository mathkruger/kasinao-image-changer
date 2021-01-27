chrome.storage.sync.set({ 'kasino': true }, function () {
    console.log('The value is ' + true);
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: "init" }, function (response) {
        console.log(response);
    });
});

const escolheKasino = (imagem) => {
    chrome.storage.sync.set({ 'tipoKasino': imagem }, function () {
        console.log('The value is ' + imagem);
        document.querySelector('.imagem-selecionada').src = imagem;

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "mudou" }, function (response) {
                console.log(response);
            });
        });
    });
}

chrome.storage.sync.get('tipoKasino', function (data) {
    document.querySelector('.imagem-selecionada').src = data.tipoKasino;
});

document.querySelectorAll('.lista-de-kasino li').forEach(item => {
    item.addEventListener('click', (e) => {
        escolheKasino(item.querySelector('.thumb').src);
    });
})