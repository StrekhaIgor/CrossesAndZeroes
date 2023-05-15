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
    finishAlert.innerHTML=`Ничья!`;
    if (gameObj.winner === gameObj.symbolPlayer) {
        finishAlert.innerHTML=`Вы победили!`;
    }
    if (gameObj.winner === gameObj.symbolEngine) {
        finishAlert.innerHTML=`Вы проиграли!`;
    }
    finishAlert.style.position='absolute';
    finishAlert.className = 'finish';
    for (let i of gameObj.winnerCombination) {
        gameObj.children[i].classList.remove('danger');
        gameObj.children[i].classList.add('win');
    }
    document.body.prepend(finishAlert);
    setTimeout(rel, 3000);
}

export function danger(gameObj) {
    for (let field of gameObj.children) {
        field.classList.remove('danger');
    }
    for (let i of gameObj.dangerComb) {
        for (let j of i) {
            gameObj.children[j].classList.add('danger');
        }
    }
}

function rel() {
    location.reload();
}