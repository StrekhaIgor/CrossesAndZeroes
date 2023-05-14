export function engineMove(gameObj) {
    gameObj.children[randomMove(gameObj.getEmptyFields)].innerHTML = gameObj.symbolEngine;
}

function randomMove(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}