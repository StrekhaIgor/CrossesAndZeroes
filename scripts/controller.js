import { engineMove } from "./engine.js";
import { gameObj } from "./model.js";
import { danger, finishGame } from "./view.js";


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
            finishGame(gameObj);
            return;
        }
        if (gameObj.isWin) {
            finishGame(gameObj);
            return;
        }
        engineMove(gameObj);
        gameObj.checkCondition();
        if (!(gameObj.isDanger)) {
            for (let i of gameObj.children) {
                i.className = 'gameField';
            }
        }
        if (gameObj.isFinish) {
            finishGame(gameObj);
            return;
        }
        if (gameObj.isWin) {
            finishGame(gameObj);
            return;
        }
        if (gameObj.isDanger) {
            danger(gameObj);
        }
    });
}