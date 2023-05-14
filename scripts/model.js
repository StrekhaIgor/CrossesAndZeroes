import { refreshVisible } from "./view.js";


export let gameObj = document.querySelector('main');
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

gameObj.symbolPlayer = '';
gameObj.symbolEngine = '';
gameObj.isFinish = false;

gameObj.setSymbols = function(symbolPlayer) {
    this.symbolPlayer = symbolPlayer;
    this.symbolEngine = symbolPlayer == 'X' ? 'O' : 'X';
    refreshVisible(this);
}

gameObj.checkCondition = function () {
    let model = Array.from(this.children).map(el => el.innerHTML);
    if (model.filter(el => el == '').length == 0) {
        this.isFinish = true;
    };
    for (let comb of combinations) {
        let winner = model[comb[0]];
        if (!winner) continue;
        let count = 0;
        for (let j of comb) {
            if (model[j] == winner) count++;
            if (count === 3) {
                this.isWin = true;
                this.winner = winner;
                this.winnerCombination = comb;
            };
        };
    };
    let emptyFielsds = [];
    for (let i in model) {
        if (model[i] === '') {
            emptyFielsds.push(i);
        };
    };
    gameObj.getEmptyFields = emptyFielsds;
}