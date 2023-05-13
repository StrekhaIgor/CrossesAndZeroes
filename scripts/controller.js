import { gameObj } from "./model.js";


export let startPanel = document.getElementById('start');

for (let elem of document.querySelectorAll('h1')) {
    elem.addEventListener('click', function() {
        let symbolPlayer = this.innerHTML;
        gameObj.setSymbols(symbolPlayer);
    });
}

for (let elem of gameObj.children) {
    elem.addEventListener('click', function() {
        this.innerHTML = gameObj.symbolPlayer;
        gameObj.checkCondition();
        if (gameObj.isFinish) {
            alert('game over');
        }
        if (gameObj.isWin) {
            window.location.href='html2.html';
        }
    });
}