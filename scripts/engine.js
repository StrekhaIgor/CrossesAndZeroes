export function engineMove(gameObj) {
    if (gameObj.isDanger && gameObj.danger != gameObj.symbolEngine) {
        for (let i of gameObj.dangerComb[0]) {
            if (!gameObj.children[i].innerHTML) {
                gameObj.children[i].innerHTML = gameObj.symbolEngine;
                return;
            }
        }
    }
    gameObj.children[randomMove(gameObj.getEmptyFields)].innerHTML = gameObj.symbolEngine;
}

function randomMove(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}