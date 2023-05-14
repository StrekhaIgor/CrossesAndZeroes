import { engineMove } from "./engine.js";
import { gameObj } from "./model.js";
import { finishGame } from "./view.js";


export let startPanel = document.getElementById('start');

for (let elem of document.querySelectorAll('h1')) {
    elem.addEventListener('click', function() {
        let symbolPlayer = this.innerHTML;
        gameObj.setSymbols(symbolPlayer);
        if (gameObj.symbolPlayer == 'O') {
            gameObj.checkCondition();
            engineMove(gameObj);
        }
    });
}

for (let elem of gameObj.children) {
    elem.addEventListener('click', function() {
        this.innerHTML = gameObj.symbolPlayer;
        gameObj.checkCondition();
        if (gameObj.isFinish) {
            alert('game over');
            return;
        }
        if (gameObj.isWin) {
            finishGame(gameObj);
            return;
        }
        engineMove(gameObj);
        gameObj.checkCondition();
        if (gameObj.isFinish) {
            alert('game over');
            return;
        }
        if (gameObj.isWin) {
            finishGame(gameObj);
            return;
        }
    });
}