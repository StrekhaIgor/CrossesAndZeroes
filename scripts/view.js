import { startPanel } from "./controller.js";
import { gameObj } from "./model.js";


gameObj.style.display='none';

export function refreshVisible(gameObj) {
    if (gameObj.symbolPlayer) {
        gameObj.style.display = '';
        startPanel.style.display = 'none';
    }
}

export function finishGame(gameObj) {
    let finishAlert = document.createElement('div');
    finishAlert.innerHTML=`${gameObj.winner} победил`;
    finishAlert.style.position='absolute';
    finishAlert.className = 'finish';
    for (let i of gameObj.winnerCombination) {
        gameObj.children[i].classList.add('win');
    }
    document.body.prepend(finishAlert);
}