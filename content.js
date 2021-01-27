let imagensKasino = 'https://images.uncyc.org/pt/thumb/1/11/Kasinao.png/250px-Kasinao.png';

const colocaKasino = () => {
    let imagens = document.querySelectorAll('img');

    imagens.forEach(item => {
        item.src = imagensKasino;
    });
}

const addListeners = () => {
    colocaKasino();

    window.addEventListener("scroll", colocaKasino);

    let imagens = document.querySelectorAll('img');
    imagens.forEach(item => {
        element.addEventListener('mouseenter', colocaKasino)
    });
}

//message listener for background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'init' || request.command === 'mudou') {
        chrome.storage.sync.get('tipoKasino', function (data) {
            if (data.tipoKasino) {
                imagensKasino = data.tipoKasino;
            }
        });

        addListeners();
    }

    sendResponse({ result: "success" });
});

//on init perform based on chrome stroage value
window.onload = function () {
    chrome.storage.sync.get('kasino', function (data) {
        if (data.kasino) {
            chrome.storage.sync.get('tipoKasino', function (data) {
                if (data.tipoKasino) {
                    imagensKasino = data.tipoKasino;
                }
                
                addListeners();
            });
        }
    });
}

