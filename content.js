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
                colocaKasino();
            }
        });

        addListeners();
    }

    sendResponse({ result: "success" });
});

function addMP3() {
    var html = '<audio autoplay><source src="http://docs.google.com/uc?export=open&id=1rhgH2SM1RrMTAMRsRgcUhThmYzCPgJU-" type="audio/mp3"></audio>';
    var body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('afterend', html);
}

//on init perform based on chrome stroage value
window.onload = function () {
    addMP3();
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

