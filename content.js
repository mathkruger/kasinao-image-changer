const colocaKasino = () => {
    let imagens = document.querySelectorAll('img');

    imagens.forEach(item => {
        item.src = 'https://images.uncyc.org/pt/thumb/1/11/Kasinao.png/250px-Kasinao.png';
    });
}

const tiraKasino = () => {
    // let imagens = document.querySelectorAll('img');

    // imagens.forEach(item => {
    //     item.src = 'https://images.uncyc.org/pt/thumb/1/11/Kasinao.png/250px-Kasinao.png';
    // });

    // num sei oq fazer
}

const addListeners = () => {
    colocaKasino();

    window.addEventListener("scroll", () => {
        colocaKasino();
    });

    let imagens = document.querySelectorAll('img');
    imagens.forEach(item => {
        hover(item, e => {
            colocaKasino();
        }, e => {
            colocaKasino();
        })
    });
}

function hover(element, enter, leave) {
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
}

//message listener for background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === 'init') {
        addListeners();
    }
    else {
        tiraKasino();
    }

    sendResponse({ result: "success" });
});

//on init perform based on chrome stroage value
window.onload = function () {
    chrome.storage.sync.get('kasino', function (data) {
        if (data.kasino) {
            addListeners();
        } else {
            tiraKasino();
        }
    });
}

