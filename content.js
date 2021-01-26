const colocaKasino = () => {
    let imagens = document.querySelectorAll('img');

    imagens.forEach(item => {
        item.src = 'https://images.uncyc.org/pt/thumb/1/11/Kasinao.png/250px-Kasinao.png';
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
    if (request.command === 'init') {
        addListeners();
    }

    sendResponse({ result: "success" });
});

//on init perform based on chrome stroage value
window.onload = function () {
    chrome.storage.sync.get('kasino', function (data) {
        if (data.kasino) {
            addListeners();
        }
    });
}

